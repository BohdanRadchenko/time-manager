import React from "react";
import {Droppable} from "react-beautiful-dnd"
import DrawCard from "../DrawCard/DrawCard";
import dataListsParse from '../../helpers/dataListsParse.helpers'
import css from './DrawLists.module.css'

const DrawLists = ({id, title, cards, date}) => {
  const listDate = dataListsParse(date)
  return (
      <Droppable droppableId={String(id)}>
        {provided => (
            <ul {...provided.droppableProps}
                ref={provided.innerRef}
                className={css.container}>
              <li className={css.listContainer} key={id}>
                <p className={css.title}>{title}</p>
                <div className={css.listDateWrapper}>
                  {/*<p>{listDate.week}</p>*/}
                  <p>{listDate.day}</p>
                  <p>{listDate.month}</p>
                  <p>{listDate.year}</p>
                </div>

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