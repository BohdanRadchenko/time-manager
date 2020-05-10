import React from "react";
import {Draggable} from 'react-beautiful-dnd'
import drawCardTimeParse from '../../helpers/drawCardTimeParse'
import css from './DrawCard.module.css'

const DrawCard = ({id, title, index, hour, min}) => {
  const time = drawCardTimeParse(hour, min)

  return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <div ref={provided.innerRef}
                 {...provided.dragHandleProps}
                 {...provided.draggableProps} >
              <div className={css.container}>
                <p>{title}</p>
                <p>{time.hour}:{time.min}</p>
              </div>
            </div>
        )}
      </Draggable>
  )
}

export default DrawCard