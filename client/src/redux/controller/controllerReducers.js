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
            return true;

        case ActionTypes.SIGN_IN_SUCCESS:
        case ActionTypes.SIGN_UP_SUCCESS:
        case ActionTypes.SIGN_IN_ERROR:
        case ActionTypes.SIGN_UP_ERROR:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    burgerHandler: burgerReducer,
    loading: loadingReducer
});