import React from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as controllerActions
  from '../../redux/controller/controllerActions'
import * as controllerSelectors
  from '../../redux/controller/controllerSelectors'
import ControlPointOutlinedIcon
  from '@material-ui/icons/ControlPointOutlined';
import {headerIconStyle} from '../../helpers/variables'
import css from './StyleIconsButtons.module.css'

const AddButton = ({isModalCards, CardsModalOpen, CardsModalClose}) => {
    const history = useHistory().location.pathname
  const handleButtonClick = () => {
    if (history.includes('dashboard')) {
      if (isModalCards) CardsModalClose()
      if (!isModalCards) CardsModalOpen()
    }
  }

  return (
      <div className={css.container}>
        <button
            onClick={handleButtonClick}
            className={css.button}>
          <ControlPointOutlinedIcon style={headerIconStyle}/>
        </button>
      </div>
  );
}

const mSTP = state => (
    {
      isModalCards: controllerSelectors.createModalCards(state),
    }
)

const mDTP = {
  CardsModalOpen: controllerActions.createModalCardsOpen,
  CardsModalClose: controllerActions.createModalCardsCLose,
}

export default connect(mSTP, mDTP)(AddButton)