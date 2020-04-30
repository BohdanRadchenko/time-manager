import { ActionTypes } from "../actionTypes";

//  Sign UP

export const signUpRequest = () => ({
  type: ActionTypes.SIGN_UP_REQUEST,
});

export const signUpSuccesss = response => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: { response },
});

export const signUpError = error => ({
  type: ActionTypes.SIGN_UP_ERROR,
  payload: { error },
});

export const signUpMessage = message => ({
  type: ActionTypes.SIGN_UP_ERROR,
  payload: { message },
})


//  Log IN

export const signInRequest = () => ({
  type: ActionTypes.SIGN_IN_REQUEST,
});

export const signInSuccesss = response => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: { response },
});

export const signInError = error => ({
  type: ActionTypes.SIGN_IN_ERROR,
  payload: { error },
});

//
// LogOUT
//

export const logOutRequest = () => ({
  type: ActionTypes.LOGOUT_REQUEST,
});

export const logOutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});

export const logOutError = () => ({
  type: ActionTypes.LOGOUT_ERROR,
});

// refresh user

export const refreshUserRequest = () => ({
  type: ActionTypes.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = response => ({
  type: ActionTypes.REFRESH_USER_SUCCESS,
  payload: { response },
});

export const refreshUserError = error => ({
  type: ActionTypes.REFRESH_USER_ERROR,
  payload: { error },
});

//
// errorMsg
//

export const errorMsg = () => ({
  type: ActionTypes.CLEAR_ERROR_MESSAGE,
});
