import { combineReducers } from 'redux';
import { ActionType } from '../actionType';


//MODAL
const modalHandlerReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.HANDLE_MODAL_CLOSE:
      return payload;

    case ActionType.HANDLE_MODAL_OPEN:
      return payload;

    default:
      return state;
  }
};


//BURGER
const burgerReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.HANDLE_BURGER_TOGGLE:
      return !state;

    default:
      return state;
  }
};


export default combineReducers({
  modalHandler : modalHandlerReducer,
  burgerHandler :  burgerReducer,
});