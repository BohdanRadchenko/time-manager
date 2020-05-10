import React, {useState} from "react";
import ColorRadioButton from "./ColorRadioButton";
import DatePickerSelect
  from "../../DatePickerSelect/DatePickerSelect";
import DateSelector from "../../DateSelector/DateSelector";
import css from './ModalCreateBoardsForm.module.css'

const ModalCreateBoardsForm = ({onCreate, onClose}) => {
  const defaultForm = {title: '', startValueDay : 0 , startValueMonth : 0}
  const [form, setForm] = useState(defaultForm)

  const getStartDay = value => {
    setForm({...form, startValueDay: value.day, startValueMonth: value.month })
  }

  const handleInputChange = e => {
    setForm({...form, title: e.target.value})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    onCreate(form)
    setForm(defaultForm)
    onClose()
  }

  return (
      <div className={css.container}>
        <form
            className={css.form}
            onSubmit={handleFormSubmit}>

          <div className={css.cardContainer}>

            <div className={css.cardWrapper}>
              <div className={css.inputWrapper}>
                <input
                    required
                    className={css.titleInput}
                    autoFocus
                    value={form.title}
                    placeholder='Boards title'
                    onChange={handleInputChange}
                    type="text"/>

                <div className={css.closeButton}
                        onClick={onClose}/>
              </div>

              <div className={css.datePickerWrapper}>
                <DatePickerSelect/>
              </div>

              <div className={css.dateWrapper}>
                <DateSelector getStartDay={getStartDay}/>
              </div>
            </div>

            <div className={css.colorWrapper}>
              <ColorRadioButton/>
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

export default ModalCreateBoardsForm