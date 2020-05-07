import {combineReducers} from 'redux';
import {ActionTypes} from '../actionTypes';

//BURGER
const burgerReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionTypes.HANDLE_BURGER_TOGGLE:
            return !state;

        default:
            return state;
    }
};

//LOADING
const loadingReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionTypes.SIGN_IN_REQUEST:
        case ActionTypes.SIGN_UP_REQUEST:
        case ActionTypes.BOARDS_REQUEST:
        case ActionTypes.LISTS_REQUEST:
        case ActionTypes.LIST_PATCH_REQUEST:
            return true;

        case ActionTypes.SIGN_IN_SUCCESS:
        case ActionTypes.SIGN_UP_SUCCESS:
        case ActionTypes.BOARDS_SUCCESS:
        case ActionTypes.LISTS_SUCCESS:
        case ActionTypes.LIST_PATCH_SUCCESS:
        case ActionTypes.SIGN_IN_ERROR:
        case ActionTypes.SIGN_UP_ERROR:
        case ActionTypes.BOARDS_ERROR:
        case ActionTypes.LISTS_ERROR:
        case ActionTypes.LIST_PATCH_ERROR:
            return false;

        default:
            return state;
    }
};

//CREATE MODAL CARDS HANDLER
const createModalCardsReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionTypes.CREATE_MODAL_CARDS_OPEN:
            return true;

        case ActionTypes.CREATE_MODAL_CARDS_CLOSE:
            return false;

        default:
            return state;
    }
};

//CREATE MODAL BOARDS HANDLER
const createModalBoardsReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionTypes.CREATE_MODAL_BOARDS_OPEN:
            return true;

        case ActionTypes.CREATE_MODAL_BOARDS_CLOSE:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    burgerHandler: burgerReducer,
    loading: loadingReducer,
    createModalCards : createModalCardsReducer,
    createModalBoards : createModalBoardsReducer,
});