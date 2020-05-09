import React from "react";
import css from './DrawBoardsCard.module.css'

const DrawBoardsCard = ({title, data, _id, handleDelete}) => {

  const handleDeleteBoard = e => {
    handleDelete(_id)
  }

  return (
      <div className={css.container}>
          <div className={css.containerInner}>
            <div className={css.contentWrapper}>
              {/*<p>{_id}</p>*/}
              <p>{title}</p>
              {/*<p>{data}</p>*/}
              <button
              onClick={e => handleDeleteBoard(e)}
                  className={css.deleteButton}>
                delete
              </button>
            </div>
        </div>
      </div>
  )
}

export default DrawBoardsCard