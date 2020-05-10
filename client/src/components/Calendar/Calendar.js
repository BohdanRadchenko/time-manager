import React, {useState} from "react";
import {
  dayNames,
  getCalendarArray,
  monthName,
  currentTime
} from "./CalendarVariables";
import css from './Calendar.module.css'

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth())
  const currentMonth = new Date().getMonth()
  const year = new Date().getFullYear()
  const day = new Date().getDate()
  const d = new Date(year, month)

  const calendarArray = getCalendarArray(d, month, year)

  const handleClickMonth = e => {
    if (e.target.name === 'prev') {
      if (month > 0) {
        setMonth(month - 1)
      }
    }
    if (e.target.name === 'next') {
      if (month < 11) {
        setMonth(month + 1)
      }
    }
  }

 const current =  currentTime()

  return (
      <div className={css.container}>
        <div className={css.controlPanel}>
          <button
              className={css.controlButtonPrev}
              name='prev'
              onClick={e => handleClickMonth(e)}>
            <div className={css.controlButtonOne}/>
            <div className={css.controlButtonTwo}/>
          </button>
          <h1 className={css.monthName}>{monthName(month)}</h1>
          <button
              className={css.controlButtonNext}
              name='next'
              onClick={e => handleClickMonth(e)}>
            <div className={css.controlButtonOne}/>
            <div className={css.controlButtonTwo}/>
          </button>
        </div>
        <ul className={css.dayNamesList}>
          {dayNames.map(el => (
              <li
                  className={css.dayNamesItem}
                  key={el.value}>
                {el.label}
              </li>
          ))}
        </ul>
        <ul className={css.calendarList}>
          {calendarArray.map((el, i) => (
              <li
                  className={el.type !== 'current'
                      ? css.notCurrentMonth
                      : el.value === day && month ===
                      new Date().getMonth()
                          ? css.calendarItemCurrent
                          : css.calendarItem}
                  key={el + i}>
                {el.value}
              </li>
          ))}
        </ul>

        <div className={month !== currentMonth
            ? css.currentTime
            : css.currentTimeOff
        }>
          <p>{current.dayWeek}</p>
          <p>{current.day}</p>
          <p>{current.month}</p>
        </div>
      </div>
  )
}

export default Calendar