import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as boardsSelectors from '../../redux/boards/boardsSelectors'
import * as boardsOperations from '../../redux/boards/boardsOperations'
import DrawBoardsCard from "../DrawBoardsCard/DrawBoardsCard";
import css from './BoardsList.module.css'

const BoardsList = ({boardsList, getAllBoards}) => {
  const history = useHistory()


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
                <DrawBoardsCard {...board}/>
              </li>
          ))}
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
  getAllBoards : boardsOperations.getBoardsAll
}

export default connect(mSTP, mDTP)(BoardsList)