import React from "react";
import css from './DrawBoardsCard.module.css'

const DrawBoardsCard = ({title, data}) => {
  return (
      <div className={css.container}>
        <p>
          {title}
        </p>
        <p>
          {data}
        </p>
      </div>
  )
}

export default DrawBoardsCard