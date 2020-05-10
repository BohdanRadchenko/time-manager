import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import MinutesSelect from "../../Selects/MinutesSelect";
import DatSelect from "../../Selects/DaySelect";
import HoursSelect from "../../Selects/HoursSelect";
import css from './ModalCreateCardsForm.module.css'

const ModalCreateCardsForm = ({onCreate, onClose}) => {
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

  const handleFormSubmit = e => {
    e.preventDefault()
    onCreate(boardId, form)
    setForm(defaultForm)
    onClose()
  }

  return (
      <div className={css.container}>
        <form
            className={css.form}
            onSubmit={e => handleFormSubmit(e)}>

          <div className={css.cardContainer}>
            <div className={css.cardWrapper}>
              <div className={css.inputWrapper}>
                <input
                    required
                    className={css.titleInput}
                    autoFocus
                    name='title'
                    value={form.title}
                    placeholder='Boards title'
                    onChange={handleChange}
                    type="text"/>

                <div className={css.closeButton}
                        onClick={onClose}/>
              </div>

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

            </div>
          </div>

          <button
              disabled={!form.title}
              type='submit'
              className={css.submitButton}>
            Create board
          </button>
        </form>
      </div>
  )
}

export default ModalCreateCardsForm