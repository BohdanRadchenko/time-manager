import { combineReducers } from 'redux';
import { ActionTypes } from '../actionTypes';
import db from '../../db.json'

const initiallyState = db

const lists = (state = initiallyState, { type, payload }) => {
  switch (type) {
    case  ActionTypes.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = payload;

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(el => el.id === droppableIdStart);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        const newState = state.map(el => {
          if(el.id === droppableIdStart) {
            return list
          }
          return el
        })
        return  newState;
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(el => el.id === droppableIdStart);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find(el => el.id === droppableIdEnd);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        const newState = state.map(el => {
          if(el.id === droppableIdStart) {
            return listStart
          }
          if(el.id === droppableIdEnd) {
            return listEnd
          }
          return el
        })
      }
      return state

    default:
      return state;
  }
};
export default combineReducers({
  lists
});
