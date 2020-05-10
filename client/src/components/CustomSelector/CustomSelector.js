import React, {useState} from "react";
import css from './CustomSelector.module.css'

const CustomSelector = ({options = [], value, onChange, styleSelect = {}, styleOption = {}}) => {
  const [defaultValue, setDefaultValue] = useState(value)

  const handleChange = e => {
    const el = options.filter(el =>  el.label === e.target.value)[0]
    onChange(el)
  }

  return (
      <div className={css.container}>
        <select className={css.select}
                // style={styleSelect}
                onChange={handleChange}>
          {!!options.length && options.map(opt => (
              <option
                  key={opt.value}
                  className={css.option}
                  // style={styleOption}
                  selected={opt.value === defaultValue.value}
                  value={opt.value}>{opt.label}</option>
          ))}
          {/*<option disabled>Выберите героя</option>*/}
          {/*<option selected value="Крокодил Гена">Крокодил Гена</option>*/}
        </select>
      </div>
  )
}

export default CustomSelector