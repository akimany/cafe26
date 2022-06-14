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
