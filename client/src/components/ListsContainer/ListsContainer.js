import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as listsOperations from '../../redux/lists/listsOperations'
import * as listsSelectors from '../../redux/lists/listsSelectors'
import * as listsActions from '../../redux/lists/listsActions'
import {DragDropContext} from 'react-beautiful-dnd'
import DrawLists from "../DrawLists/DrawLists";
import css from './ListsContainer.module.css'
import ModalCreateCards
  from "../Modal/ModalCreateCards/ModalCreateCards";


const ListsContainer = ({lists, handleDrag, getAllLists, handlePatchList, isModalCreateCards}) => {
  const history = useHistory()
  const boardId = history.location.pathname.split('/')[2]

  useEffect(() => {
    getAllLists(boardId)
  }, [boardId, getAllLists])

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
    handlePatchList(boardId, lists)
  }
  return (
      <>
        {isModalCreateCards && <ModalCreateCards/>}
        <DragDropContext onDragEnd={onDragEnd}>
          <ul className={css.container}>
            {lists && lists.map(list => (
                <li
                    key={list.id}
                    className={css.listsContainer}>
                  <DrawLists  {...list}/>
                </li>
            ))}
          </ul>
        </DragDropContext>
      </>
  )
}

const mSTP = state => (
    {
      lists: listsSelectors.getLists(state),
      isModalCreateCards : controllerSelectors.createModalCards(state)
    }
)

const mDTP = {
  handleDrag: listsActions.handleDrag,
  getAllLists: listsOperations.listsHandler,
  handlePatchList: listsOperations.handlePatchList

}

export default connect(mSTP, mDTP)(ListsContainer)