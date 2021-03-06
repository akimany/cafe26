import { makeAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const signUpStart = (email, password, displayName) =>
  makeAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
export const signUpFailed = (error) =>
  makeAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signUpSuccess = (user, additionalInformation) =>
  makeAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalInformation,
  });

export const signInSuccess = (user) =>
  makeAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  makeAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const emailSignInStart = (email, password) =>
  makeAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signOutStart = () => makeAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  makeAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  makeAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
