import React from "react";
import css from './DrawLists.module.css'
import DrawCard from "../DrawCard/DrawCard";

const DrawLists = ({id, title, cards}) => {
  return (
      <ul className={css.container}>
        {cards && cards.map(card => (
            <li key={card.id}>
              <p>{title}</p>
              <DrawCard {...card}/>
            </li>
        ))}
      </ul>
  )
}

export default DrawLists