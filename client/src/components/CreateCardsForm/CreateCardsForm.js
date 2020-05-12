import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as listsOperations from '../../redux/lists/listsOperations'
import * as controllerActions
  from '../../redux/controller/controllerActions'
import MinutesSelect from "../Selects/MinutesSelect";
import DatSelect from "../Selects/DaySelect";
import HoursSelect from "../Selects/HoursSelect";
import css from './CreateCardsForm.module.css'

const CreateCardsForm = ({onModalCardsClose, handleCreateCards}) => {
  const defaultForm = {title: '', day: '', hour: 9, min: 0}
  const [form, setForm] = useState(defaultForm)
  const history = useHistory()
  const boardId = history.location.pathname.split('/')[2]

  const handleChange = e => {
    if (e.target) {
      return setForm({...form, [e.target.name]: e.target.value})
    }
    if (e.type === 'change') {
      return null
    }
    if (e.type) {
      return setForm({...form, [e.type]: e.value})
    }
  }


  const handleSubmit = e => {
    e.preventDefault()
    handleCreateCards(boardId, form)
    setForm(defaultForm)
    onModalCardsClose()
  }

  return (
      <form
          onSubmit={e => handleSubmit(e)}
          className={css.container}>
        <input className={css.inputText}
               autoFocus
               type="text" name='title'
               onChange={e => handleChange(e)}
               value={form.title}/>
        <div className={css.selectWrapper}>
          <div className={css.daySelectWrapper}>
            <DatSelect getChange={handleChange}/>
          </div>
          <div className={css.TimeSelectWrapper}>
            <div className={css.HourSelectWrapper}>
              <HoursSelect getChange={handleChange}/>
            </div>
            <div className={css.MinutSelectWrapper}>
              <MinutesSelect getChange={handleChange}/>
            </div>
          </div>
        </div>
        <button type='submit'>
          Save...
        </button>
      </form>
  )
}

const mDTP = {
  handleCreateCards: listsOperations.handleCreateCards,
  onModalCardsClose: controllerActions.createModalCardsCLose
}

export default connect(null, mDTP)(CreateCardsForm)