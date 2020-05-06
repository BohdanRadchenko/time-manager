import React from "react";
import {Droppable} from "react-beautiful-dnd"
import DrawCard from "../DrawCard/DrawCard";
import css from './DrawLists.module.css'

const DrawLists = ({id, title, cards}) => {
  return (
      <Droppable droppableId={String(id)}>
        {provided => (
            <ul {...provided.droppableProps}
                ref={provided.innerRef}
                className={css.container}>
              <li>
                <p>{title}</p>
              </li>
              {cards && cards.map((card, index) => (
                  <li key={card.id}>
                    <DrawCard {...card} index={index}/>
                  </li>
              ))}
              {provided.placeholder}
            </ul>
        )}
      </Droppable>
  )
}

export default DrawLists