import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as boardsSelectors from '../../redux/boards/boardsSelectors'
import * as boardsOperations
  from '../../redux/boards/boardsOperations'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import DrawBoardsCard from "../DrawBoardsCard/DrawBoardsCard";
import CreateBoardButton
  from "../Buttons/CreateBoardButton/CreateBoardButton";
import ModalCreateBoards
  from "../Modal/ModalCreateBoards/ModalCreateBoards";
import css from './BoardsList.module.css'

const BoardsList = ({boardsList, getAllBoards, deleteBoard, isModalCreateBoard}) => {
  const history = useHistory()

  const handleDelete = id => {
    deleteBoard(id)
  }

  const handleBoardClick = id => {
    history.push(`/dashboard/${id}`)
  }

  useEffect(() => {
    getAllBoards()
  }, [getAllBoards])

  return (
      <>
        {isModalCreateBoard && <ModalCreateBoards/>}
        <div className={css.container}>
          <ul className={css.boardsList}>
            {!!boardsList.length && boardsList.map(board => (
                <li key={board._id} className={css.boardsItem}>
                  <DrawBoardsCard
                      {...board}
                      handleBoardClick={handleBoardClick}
                      handleDelete={handleDelete}/>
                </li>
            ))}
            <li key={'createBoardButton'} className={css.boardsItem}>
              <CreateBoardButton/>
            </li>
          </ul>
        </div>
      </>
  )
}

const mSTP = state => (
    {
      boardsList: boardsSelectors.getBoards(state),
      isModalCreateBoard : controllerSelectors.createModalBoards(state)
    }
)

const mDTP = {
  getAllBoards: boardsOperations.getBoardsAll,
  deleteBoard: boardsOperations.deleteBoard
}

export default connect(mSTP, mDTP)(BoardsList)