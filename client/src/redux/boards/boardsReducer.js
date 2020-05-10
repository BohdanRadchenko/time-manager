import { combineReducers } from 'redux';
import { ActionTypes } from '../actionTypes';

const boardsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.BOARDS_SUCCESS:
    case ActionTypes.DELETE_BOARD_SUCCESS:
      return payload

    case ActionTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_UP_ERROR:
    case ActionTypes.SIGN_IN_ERROR:
    case ActionTypes.REFRESH_USER_ERROR:
      return payload.error;

    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
    case ActionTypes.REFRESH_USER_SUCCESS:
    case ActionTypes.CLEAR_ERROR_MESSAGE:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  boards : boardsReducer
});
