import React from "react";
// import DatePicker from "react-datepicker";
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
import DatePicker from 'react-date-picker';

const DatePicker = ( ) => {
  return (
      <div>
        <DatePicker
            value={new Date()}
            format="MMM dd, yyyy"
            locale="en"
            minDate={new Date()}
            onChange={e => handleChange(e)}
        />
      </div>
  )
}

export default DatePicker