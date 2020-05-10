import React, {useState} from 'react';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
import DatePicker from 'react-date-picker';
import css from './DatePickerSelect.module.css';

const DatePickerSelect = ({value, onChange}) => {
  const [state, setState] = useState({date: new Date()})

  onChange = date => setState({date})

  return (
      <div className={css.container}>
        <DatePicker
            className={css.dateInput}
            value={state.date}
            format="MMM dd, yyyy"
            locale="en"
            minDate={new Date()}
            onChange={onChange}
        />
      </div>
  )
}

export default DatePickerSelect;
