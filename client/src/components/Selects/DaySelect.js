import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {selectWeekDay} from "../../helpers/selectDay.helpers";

const options = [
  {value: 0, label: 'Mon'},
  {value: 1, label: 'Tue'},
  {value: 2, label: 'Wed'},
  {value: 3, label: 'Thu'},
  {value: 4, label: 'Fri'},
  {value: 5, label: 'Sat'},
  {value: 6, label: 'Sun'},
];

const DatSelect = ({getChange}) => {
  const day = selectWeekDay(options)
  const [selectedOption, setSelectedOption] = useState(day)

  useEffect(() => {
    getChange({...selectedOption, type: 'day'})
  // }, [selectedOption, getChange])
  }, [])


  const handleChange = value => {
    setSelectedOption(value)
    getChange({...value, type: 'day'})
  };

  return (
      <div>
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
      </div>
  )
}

export default DatSelect
