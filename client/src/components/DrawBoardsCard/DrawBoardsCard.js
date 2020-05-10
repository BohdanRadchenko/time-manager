import React from "react";
import dataBoardsParse from "../../helpers/dataBoardsParse.helpers";
import css from './DrawBoardsCard.module.css'

const DrawBoardsCard = ({title, data, _id, handleDelete, handleBoardClick, dateStart, dateEnd}) => {
  const handleBoardCardClick = e => {
    if (e.target.name === 'click' ||
        e.target.tagName === 'P' ||
        e.target.tagName.includes('H')) {
      handleBoardClick(_id)
    }
    if (e.target.name === 'delete') {
      handleDelete(_id)
    }
  }

  const startDay = dataBoardsParse(dateStart)
  const endDay = dataBoardsParse(dateEnd)

  return (
      <div className={css.container}>
        <div className={css.containerInner}>
          <div className={css.contentWrapper}>
            <div className={css.contentInner}>
              <div className={css.mainSide}>
                <button className={css.mainSideButton}
                        name='click'
                        onClick={handleBoardCardClick}>
                  <p className={css.title}>{title}</p>
                  <div className={css.startDateWrapper}>
                    <p>{startDay.day}</p>
                    <p>{startDay.month}</p>
                    <p>{startDay.year}</p>
                  </div>
                  <div className={css.horizonLine}/>
                  <div className={css.endDateWrapper}>
                    <p>{endDay.day}</p>
                    <p>{endDay.month}</p>
                    <p>{endDay.year}</p>
                  </div>
                </button>
              </div>
              <div className={css.deleteSide}>
                <button className={css.deleteButton}
                        name='delete'
                        onClick={handleBoardCardClick}>
                  <div className={css.deleteOne}/>
                  <div className={css.deleteTwo}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DrawBoardsCard