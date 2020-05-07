import { ActionTypes } from "../actionTypes";

//ALL LIST
export const listsRequest = () => ({
  type: ActionTypes.LISTS_REQUEST,
});

export const listsSuccess = response => ({
  type: ActionTypes.LISTS_SUCCESS,
  payload: response ,
});

export const listsError = error => ({
  type: ActionTypes.LISTS_ERROR,
  payload: error ,
});


//ALL LIST
export const listPatchRequest = () => ({
  type: ActionTypes.LISTS_REQUEST,
});

export const listPatchSuccess = response => ({
  type: ActionTypes.LISTS_SUCCESS,
  payload: response ,
});

export const listPatchError = error => ({
  type: ActionTypes.LISTS_ERROR,
  payload: error ,
});


// DRAG AND DROP
export const handleDrag = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => ({
  type: ActionTypes.DRAG_HAPPENED,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type,
  }
})