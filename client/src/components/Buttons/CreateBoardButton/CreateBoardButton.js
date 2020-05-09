import React from "react";
import {connect} from 'react-redux'
import * as controllerActions from '../../../redux/controller/controllerActions'
import css from './CreateBoardButton.module.css'

const CreateBoardButton = ({onCreateModalBoardsOpen}) => {
  const handleCreateButton = e => {
    onCreateModalBoardsOpen()
  }
  return (
      <div className={css.container}>
        <div className={css.containerInner}>
          <div className={css.contentWrapper}>
            <button
                onClick={handleCreateButton}
                className={css.deleteButton}>
              delete
            </button>
          </div>
        </div>
      </div>
  )
}

const mDTP = {
  onCreateModalBoardsOpen : controllerActions.createModalBoardsOpen
}

export default  connect(null, mDTP)(CreateBoardButton)