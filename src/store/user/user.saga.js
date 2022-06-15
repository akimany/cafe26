import {
  makeUserDocumentFromAuth,
  makeAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
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
    const { user } = yield call(
      makeAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    console.log(
      'signUp func error - no saga take over looks like - straight action dispatch'
    );
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInformation },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalInformation);
}

// Sign in with email
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// watcher functions
// where is the payload for 'signUp' coming from - stackoverflow says the payload is passed atuomatically
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onEmailSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onSignUpStart), call(onSignUpSuccess)]);
}
