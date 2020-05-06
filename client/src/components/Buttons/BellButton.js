import React from "react";
import NotificationsOutlinedIcon
  from '@material-ui/icons/NotificationsOutlined';
import {headerIconStyle} from '../../helpers/variables'
import css from './StyleIconsButtons.module.css'

const BellButton = () => {
  return (
      <div className={css.container}>
        <button className={css.button}>
          <NotificationsOutlinedIcon style={headerIconStyle}/>
        </button>
      </div>
  )
}

export default BellButton