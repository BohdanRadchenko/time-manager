import { ActionTypes } from "../actionTypes";

export const boardsRequest = () => ({
  type: ActionTypes.BOARDS_REQUEST,
});

export const boardsSuccess = response => ({
  type: ActionTypes.BOARDS_SUCCESS,
  payload: response,
});

export const boardsError = error => ({
  type: ActionTypes.BOARDS_ERROR,
  payload: { error },
});