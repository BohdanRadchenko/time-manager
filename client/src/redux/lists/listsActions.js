import { ActionTypes } from "../actionTypes";

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