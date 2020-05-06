import React from "react";
import {useHistory} from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {headerIconStyle} from '../../helpers/variables'
import css from './StyleIconsButtons.module.css'

const HomeButton = () => {
  const history = useHistory()

  const handleButtonClick = () => {
    history.push('/home')
  }
  return (
      <div className={css.container}>
        <button
            onClick={handleButtonClick}
            className={css.button}>
          <HomeOutlinedIcon style={headerIconStyle}/>
        </button>
      </div>
  )
}

export default HomeButton