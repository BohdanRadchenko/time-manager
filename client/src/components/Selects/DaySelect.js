import React, {useState} from 'react';
import Select from 'react-select';
import selectDay from "../../helpers/selectDay.helpers";

const options = [
  {value: 1, label: 'Mon'},
  {value: 2, label: 'Tue'},
  {value: 3, label: 'Wed'},
  {value: 4, label: 'Thu'},
  {value: 5, label: 'Fri'},
  {value: 6, label: 'Sat'},
  {value: 7, label: 'Sun'},
];

const DatSelect = () => {
  const day = selectDay(options)
  const [selectedOption, setSelectedOption] = useState(day)
  const handleChange = selectedOption => {
    console.log(`Option selected:`, selectedOption);
    setSelectedOption(selectedOption)
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
