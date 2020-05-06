import React from "react";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {headerIconStyle} from '../../helpers/variables'
import css from './StyleIconsButtons.module.css'

const InfoButton = () => {
  return (
      <div className={css.container}>
        <button className={css.button}>
          <InfoOutlinedIcon style={headerIconStyle}/>
        </button>
      </div>
  )
}

export default InfoButton