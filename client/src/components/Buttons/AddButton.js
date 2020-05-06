import React from "react";
import {connect} from 'react-redux'
import * as controllerActions
  from '../../redux/controller/controllerActions'
import * as controllerSelectors
  from '../../redux/controller/controllerSelectors'
import ControlPointOutlinedIcon
  from '@material-ui/icons/ControlPointOutlined';
import {headerIconStyle} from '../../helpers/variables'
import css from './StyleIconsButtons.module.css'

const AddButton = ({isModal, modalOpen, modalClose}) => {
  const handleButtonClick = () => {
    if(isModal) modalClose()
    if(!isModal) modalOpen()
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

const mSTP = state => ({
      isModal: controllerSelectors.createModal(state)
})

const mDTP = {
  modalOpen: controllerActions.createModalOpen,
  modalClose: controllerActions.createModalClose
}

export default connect(mSTP, mDTP)(AddButton)