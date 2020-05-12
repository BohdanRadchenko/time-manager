import React from "react";
import {Draggable} from 'react-beautiful-dnd'
import drawCardTimeParse from '../../helpers/drawCardTimeParse'
import DeleteForeverOutlinedIcon
  from '@material-ui/icons/DeleteForeverOutlined';
import css from './DrawCard.module.css'

const DrawCard = ({id, title, index, hour, min, homeType, handleDeleteCard}) => {
  const time = drawCardTimeParse(hour, min)

  const handleDeleteClick = e => {
    handleDeleteCard(id)
  }

  return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <div ref={provided.innerRef}
                 {...provided.dragHandleProps}
                 {...provided.draggableProps} >
              <div className={css.container}>
                <p>{title}</p>
                {!homeType && (
                    <p>{time.hour}:{time.min}</p>
                )}
                {homeType && (
                    <button
                        onClick={e => handleDeleteClick(e)}
                        className={css.deleteCardButton}>
                      <DeleteForeverOutlinedIcon
                          style={{color: '#172b4d'}}/>
                    </button>
                )}
              </div>
            </div>
        )}
      </Draggable>
  )
}

export default DrawCard