import React, {useState} from 'react';
import Select from 'react-select';

const options = [
  {value: 0, label: '00'},
  {value: 10, label: '10'},
  {value: 20, label: '20'},
  {value: 30, label: '30'},
  {value: 40, label: '40'},
  {value: 50, label: '50'},
];

const MinutesSelect = ({getChange}) => {
  const [selectedOption, setSelectedOption] = useState( {value: 0, label: '00'})

  // useEffect(() => {
    // getChange({...selectedOption, type: 'min'})
  // }, [selectedOption])

  const handleChange = value => {
    setSelectedOption(value)
    getChange({...value, type: 'min'})

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
