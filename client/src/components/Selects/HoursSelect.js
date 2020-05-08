import React, {useState} from 'react';
import Select from 'react-select';

const options = [
  {value: 9, label: '09'},
  {value: 10, label: '10'},
  {value: 11, label: '11'},
  {value: 12, label: '12'},
  {value: 13, label: '13'},
  {value: 14, label: '14'},
  {value: 15, label: '15'},
  {value: 16, label: '16'},
  {value: 17, label: '17'},
  {value: 18, label: '18'},
  {value: 19, label: '19'},
  {value: 20, label: '20'},
];


const HoursSelect = ({getChange}) => {
  const [selectedOption, setSelectedOption] = useState(  {value: 9, label: '09'},)
  const handleChange = value => {
    setSelectedOption(value)
    getChange({...selectedOption, type: 'hour'})
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

export default HoursSelect
