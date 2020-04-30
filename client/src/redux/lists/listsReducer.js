import { combineReducers } from 'redux';
import { ActionTypes } from '../actionTypes';
import db from '../../db.json'

const lists = (state = db, { type, payload }) => {
  switch (type) {
       default:
      return state;
  }
};
export default combineReducers({
  lists
});
