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

export const deleteBoardRequest = () => ({
  type: ActionTypes.DELETE_BOARD_REQUEST,
});

export const deleteBoardSuccess = response => ({
  type: ActionTypes.DELETE_BOARD_SUCCESS,
  payload: response,
});

export const deleteBoardError = error => ({
  type: ActionTypes.DELETE_BOARD_ERROR,
  payload: { error },
});
