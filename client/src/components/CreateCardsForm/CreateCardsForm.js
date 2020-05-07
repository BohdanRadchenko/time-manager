import React from "react";
import MinutesSelect from "../Selects/MinutesSelect";
import DatSelect from "../Selects/DaySelect";
import HoursSelect from "../Selects/HoursSelect";
import css from './CreateCardsForm.module.css'

const CreateCardsForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
      <form
          onSubmit={e => handleSubmit(e)}
          className={css.container}>
        <input type="text"/>
        <div className={css.selectWrapper}>
          <div className={css.daySelectWrapper}>
            <DatSelect/>
          </div>
          <div className={css.TimeSelectWrapper}>
            <div className={css.HourSelectWrapper}>
              <HoursSelect/>
            </div>
            <div className={css.MinutSelectWrapper}>
              <MinutesSelect/>
            </div>
          </div>
        </div>
        <button type='submit'>
          Save...
        </button>
      </form>
  )
}

export default CreateCardsForm