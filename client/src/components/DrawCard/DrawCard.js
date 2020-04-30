import React from "react";
import css from './DrawCard.module.css'

const DrawCard = ({id, title}) => {
  return (
      <div>
        <p>{title}</p>
      </div>
  )
}

export default DrawCard