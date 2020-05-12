import React, {useState} from "react";
import {connect} from 'react-redux'
import * as listsOperations from '../../redux/lists/listsOperations'
import {Droppable} from "react-beautiful-dnd"
import dataListsParse from '../../helpers/dataListsParse.helpers'
import DrawCard from "../DrawCard/DrawCard";
import AddActionButton
  from "../Buttons/AddActionButton/AddActionButton";
import HighlightOffOutlinedIcon
  from '@material-ui/icons/HighlightOffOutlined';
import CheckCircleOutlineOutlinedIcon
  from '@material-ui/icons/CheckCircleOutlineOutlined';

import css from './DrawLists.module.css'

const DrawLists = ({id, title, cards, date, type, boardId, handleChangeListTitle, onDeleteList, onDeleteCard, deleteOn}) => {
  const listDate = dataListsParse(date)

  const [inputTitle, setInputTitle] = useState(title)
  const [disabledTitleInput, setDisabledTitleInput] = useState(true)

  const handleInputTitleClick = e => {
    setDisabledTitleInput(false)
  }

  const handleInputTitleChange = e => {
    setInputTitle(e.target.value)
  }

  const handleFormTitleSubmit = e => {
    e.preventDefault()
    const form = {listId: id, boardId, title: inputTitle}
    handleChangeListTitle(form)
    setDisabledTitleInput(true)
    e.target.querySelector('input').blur()
  }

  const handleDeleteList = e => {
    const form = {listId: id, boardId}
    onDeleteList(form)
  }

  const handleDeleteCard = cardId => {
    const form = {listId: id, boardId, cardId}
    onDeleteCard(form)
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
                      <form
                          className={css.homeForm}
                          onSubmit={e => handleFormTitleSubmit(e)}>
                        <div
                            onClick={handleInputTitleClick}
                            className={css.titleHomeWrapper}>
                          <input
                              // disabled={disabledTitleInput}
                              value={inputTitle}
                              onChange={e => handleInputTitleChange(
                                  e)}
                              className={disabledTitleInput
                                  ? css.disabledTitleHome
                                  : css.titleHome}/>
                          {!disabledTitleInput && (
                              <button
                                  className={css.submitTitleButton}
                                  type='submit'>
                                <CheckCircleOutlineOutlinedIcon
                                    style={{color: '#5aac44'}}/>
                              </button>
                          )}
                        </div>
                        {disabledTitleInput && deleteOn && (
                            <button type='button'
                                    onClick={e => handleDeleteList(
                                        e)}
                                    className={css.deleteListsButton}>
                              <HighlightOffOutlinedIcon
                                  style={{color: '#172b4d'}}/>
                            </button>
                        )}
                      </form>
                    </li>

                    {cards && cards.map((card, index) => (
                        <li key={card.id}>
                          <DrawCard {...card} index={index} homeType
                                    handleDeleteCard={handleDeleteCard}/>
                        </li>
                    ))}

                    {provided.placeholder}

                    <li className={css.addActionButtonWrapper}>
                      <AddActionButton boardId={boardId} listId={id}/>
                    </li>
                  </>
              )}
            </ul>
        )}
      </Droppable>
  )
}

const mDTP = {
  handleChangeListTitle: listsOperations.handleChangeHomeListsTitle,
  onDeleteList: listsOperations.handleDeleteHomeList,
  onDeleteCard: listsOperations.handleDeleteHomeCard,
}

export default connect(null, mDTP)(DrawLists)