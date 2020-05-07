import React, {useState} from "react";
import {connect} from 'react-redux'
import * as controllerActions from '../../redux/controller/controllerActions'
import * as boardsOperations from '../../redux/boards/boardsOperations'
import css from './CreateBoardsForm.module.css'

const CreateBoardsForm = ({onBoardsCreate, onBoardsModalClose}) => {
  const defaultForm = {title : ''}
  const [form, setForm] = useState(defaultForm)

  const handleFormSubmit = e => {
    e.preventDefault()
    onBoardsCreate(form)
    setForm(defaultForm)
    onBoardsModalClose()
  }

  const handleInputChange = e => {
    setForm({...form, title : e.target.value})
  }

  return (
      <div className={css.container}>
        <form onSubmit={handleFormSubmit}>
          <input
              value={form.title}
              onChange={handleInputChange}
              type="text"/>
          <button
              type='submit'
              className={css.button}>
            save...
          </button>
        </form>
      </div>
  )
}

const mDTP = {
  onBoardsCreate : boardsOperations.boardsCreate,
  onBoardsModalClose : controllerActions.createModalBoardsClose
}

export default connect(null, mDTP)(CreateBoardsForm)