import React, {useState} from 'react';
import Select from 'react-select';

const options = [
  {value: '00', label: '00'},
  {value: '10', label: '10'},
  {value: '20', label: '20'},
  {value: '30', label: '30'},
  {value: '40', label: '40'},
  {value: '50', label: '50'},
];


const MinutesSelect = () => {
  const [selectedOption, setSelectedOption] = useState( {value: '00', label: '00'},)
  const handleChange = value => {
    console.log(`Option selected:`, value);
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

export default MinutesSelect
