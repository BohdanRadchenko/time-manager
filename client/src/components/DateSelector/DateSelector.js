import React, {useEffect, useState} from "react";
import Select from "react-select";
import dayOptions from './dayOptions'
import monthOptions from './monthOptions'
import {
  selectMonth,
  selectNumberDay
} from '../../helpers/selectDay.helpers'
import css from './DateSelector.module.css'

const DateSelector = ({getStartDay}) => {
  const day = selectNumberDay(dayOptions)
  const month = selectMonth(monthOptions)
  const [daySelector, setDaySelector] = useState(day)
  const [monthSelector, setMonthSelector] = useState(month)

  useEffect(() => {
    const value = {day : daySelector.value, month: monthSelector.value}
    getStartDay(value)
  }, [daySelector, monthSelector])

  const handleChange = value => {
    if (value.type === 'day') {
      setDaySelector(value)
    }
    if (value.type === 'month') {
      setMonthSelector(value)
    }
  };

  return (
      <div className={css.container}>
        <div className={css.dayWrapper}>
          <Select
              value={daySelector}
              options={dayOptions}
              onChange={e => handleChange({...e, type: 'day'})}
          />
        </div>
        <div className={css.monthWrapper}>
          <Select
              value={monthSelector} ss
              onChange={e => handleChange({...e, type: 'month'})}
              options={monthOptions}
          />
        </div>
      </div>
  )
}

export default DateSelector