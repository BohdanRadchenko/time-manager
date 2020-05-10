import React, {useState} from "react";
import {Droppable} from "react-beautiful-dnd"
import dataListsParse from '../../helpers/dataListsParse.helpers'
import DrawCard from "../DrawCard/DrawCard";
import css from './DrawLists.module.css'
import AddTrelloCard from "../Buttons/AddTrelloCard/AddTrelloCard";

const DrawLists = ({id, title, cards, date, type}) => {
  const listDate = dataListsParse(date)

  const [inputTitle, setInputTitle] = useState(title)
  const [disabledTitleInput, setDisabledTitleInput] = useState(true)

  const handleInputTitleClick = e => {
    setDisabledTitleInput(false)
    console.dir(e.target)
    console.log(e.target)
    e.target.focus()
    // console.log(e.target.querySelector('input'))
    // e.target.querySelector('input').focus()
  }

  const handleInputTitleChange = e => {
    setInputTitle(e.target.value)
  }

  const handleFormTitleSubmit = e => {
    e.preventDefault()
    console.log('e handleFormTitleSubmit')
    setDisabledTitleInput(true)
  }


  return (
      <Droppable droppableId={String(id)}>
        {provided => (
            <ul {...provided.droppableProps}
                ref={provided.innerRef}
                className={type === 'work'
                    ? css.containerWork
                    : css.containerHome
                }>

              {type === 'work' && (
                  <>
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
                  </>
              )}

              {type === 'home' && (
                  <>
                    <li className={css.listContainer} key={id}>
                      {/*<p className={css.titleHome}>{title}</p>*/}
                      <form onSubmit={e => handleFormTitleSubmit(e)}>
                        <div
                            onClick={handleInputTitleClick}
                            className={css.titleHomeWrapper}>
                          <input
                              autoFocus
                              disabled={disabledTitleInput}
                              value={inputTitle}
                              onChange={e => handleInputTitleChange(
                                  e)}
                              className={css.titleHome}/>
                          {/*<input type="submit"/>*/}
                          {!disabledTitleInput && (
                              <button
                                  className={css.submitTitleButton}
                                  type='submit'/>
                          )}
                        </div>
                      </form>
                    </li>

                    {cards && cards.map((card, index) => (
                        <li key={card.id}>
                          <DrawCard {...card} index={index}/>
                        </li>
                    ))}

                    <li className={css.addTrelloCardWrapper}>
                      <AddTrelloCard/>
                    </li>

                    {provided.placeholder}
                  </>
              )}
            </ul>
        )}
      </Droppable>
  )
}

export default DrawLists