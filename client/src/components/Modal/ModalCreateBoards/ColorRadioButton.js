import React from "react";
import css from './ColorRadioButton.module.css'

const colorArray = [
  {id: 0, color: '#0079bf'},
  {id: 1, color: '#d29034'},
  {id: 2, color: '#519839'},
  {id: 3, color: '#b04632'},
  {id: 4, color: '#89609e'},
  {id: 5, color: '#cd5a91'},
  {id: 6, color: '#4dd6fb'},
  {id: 7, color: '#00aecc'},
  {id: 8, color: '#838c91'},
]


const ColorRadioButton = () => {
  return (
      <ul className={css.container}>
        {colorArray.map(el => (
            <li
                key={el.id}
                className={css.containerItem}>
              <div className={css.containerInner}>
                  <div
                      style={{backgroundColor : el.color}}
                      className={css.contentWrapper}/>
              </div>
            </li>
        ))}
      </ul>
  )
}

export default ColorRadioButton