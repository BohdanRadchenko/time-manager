import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as boardsSelectors from '../../redux/boards/boardsSelectors'
import * as boardsOperations from '../../redux/boards/boardsOperations'
import DrawBoardsCard from "../DrawBoardsCard/DrawBoardsCard";
import CreateBoardButton
  from "../Buttons/CreateBoardButton/CreateBoardButton";
import css from './BoardsList.module.css'

const BoardsList = ({boardsList, getAllBoards, deleteBoard}) => {
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
      <div className={css.container}>
        <ul className={css.boardsList}>
          {!!boardsList.length && boardsList.map(board => (
              <li key={board._id} className={css.boardsItem} onClick={e => handleBoardClick(board._id)}>
                <DrawBoardsCard {...board} handleDelete={handleDelete}/>
              </li>
          ))}
          {/*<li*/}
          {/*    key={'createButton'}*/}
          {/*    className={css.boardsItem}>*/}
          {/*  <CreateBoardButton/>*/}
          {/*</li>*/}
        </ul>
      </div>
  )
}

const mSTP = state => (
    {
      boardsList: boardsSelectors.getBoards(state)
    }
)

const mDTP = {
  getAllBoards : boardsOperations.getBoardsAll,
  deleteBoard : boardsOperations.deleteBoard
}

export default connect(mSTP, mDTP)(BoardsList)