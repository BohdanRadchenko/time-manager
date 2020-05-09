import React from "react";
import css from './DrawBoardsCard.module.css'

const DrawBoardsCard = ({title, data, _id}) => {
  return (
      <div className={css.container}>
          <div className={css.containerInner}>
            <div className={css.contentWrapper}>
              <p>{_id}</p>
              <p>{title}</p>
              <p>{data}</p>
            </div>
        </div>
      </div>
  )
}

export default DrawBoardsCard