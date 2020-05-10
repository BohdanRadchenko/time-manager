import React from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as controllerActions
  from '../../redux/controller/controllerActions'
import * as boardsSelectors from '../../redux/boards/boardsSelectors'
import dataBoardsParse from "../../helpers/dataBoardsParse.helpers";
import css from './BurgerBoardsList.module.css'

const BurgerBoardsList = ({boards, handlerBurger}) => {
  const history = useHistory()

  const handleBoardClick = (e, id) => {
    history.push(`/dashboard/${id}`)
    handlerBurger()
  }

  return (
      <div className={css.container}>
        <ul className={css.boardsList}>
          {boards && boards.map(board => (
              <li
                  onClick={e => handleBoardClick(e, board._id)}
                  key={board._id}
                  className={css.boardsItem}>
                <p className={css.title}>{board.title}</p>
                {board.type === 'work' && (
                    <div className={css.dateWrapper}>
                      <div className={css.startDateWrapper}>
                        <p>{dataBoardsParse(board.dateStart).day}</p>
                        <p>{dataBoardsParse(
                            board.dateStart).month}</p>
                        <p>{dataBoardsParse(board.dateStart).year}</p>
                      </div>
                      <div className={css.horizonLine}/>
                      <div className={css.endDateWrapper}>
                        <p>{dataBoardsParse(board.dateEnd).day}</p>
                        <p>{dataBoardsParse(board.dateEnd).month}</p>
                        <p>{dataBoardsParse(board.dateEnd).year}</p>
                      </div>
                    </div>
                )}
              </li>
          ))}
        </ul>
      </div>
  )
}

const mSTP = state => (
    {
      boards: boardsSelectors.getBoards(state)
    }
)

const mDTP = {
  handlerBurger: controllerActions.handlerBurger
}

export default connect(mSTP, mDTP)(BurgerBoardsList)