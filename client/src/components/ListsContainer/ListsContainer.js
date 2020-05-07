import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as listsOperations from '../../redux/lists/listsOperations'
import * as listsSelectors from '../../redux/lists/listsSelectors'
import * as listsActions from '../../redux/lists/listsActions'
import {DragDropContext} from 'react-beautiful-dnd'
import DrawLists from "../DrawLists/DrawLists";
import css from './ListsContainer.module.css'

const ListsContainer = ({lists, handleDrag, getAllLists, handlePatchList}) => {
  const history = useHistory()
  const boardId = history.location.pathname.split('/')[2]

  useEffect(() => {
    getAllLists(boardId)
  }, [boardId, getAllLists])

  useEffect(() => {
    handlePatchList(boardId, lists)
  }, [handleDrag])

  const onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result
    if (!destination) return
    handleDrag(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
    )
  }
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={css.container}>
          {lists && lists.map(list => (
              <div
                  key={list.id}
                  className={css.listsContainer}>
                <DrawLists  {...list}/>
              </div>
          ))}
        </div>
      </DragDropContext>
  )
}

const mSTP = state => (
    {
      lists: listsSelectors.getLists(state)
    }
)

const mDTP = {
  handleDrag: listsActions.handleDrag,
  getAllLists: listsOperations.listsHandler,
  handlePatchList: listsOperations.handlePatchList

}

export default connect(mSTP, mDTP)(ListsContainer)