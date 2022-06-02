import { makeUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  signInFailed,
  signInSuccess,
  signUpFailed,
  signUpSuccess,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';

export function* getSnapshotFromUserAuth(userAuthObj, additionalInformation) {
  try {
    const userSnapshot = yield call(
      makeUserDocumentFromAuth,
      userAuthObj,
      additionalInformation
    );

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(makeUserDocumentFromAuth, {
      email,
      password,
    });
    console.log('user from gen func:', user);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInformation },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignUpStart)]);
}
