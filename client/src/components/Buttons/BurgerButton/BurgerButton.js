import React from 'react';
import {connect} from 'react-redux'
import * as controllerSelectors
  from '../../../redux/controller/controllerSelectors'
import * as controllerActions
  from '../../../redux/controller/controllerActions'
import css from "./BurgerButton.module.css";

const BurgerButton = ({isOpen, handlerBurger}) => {
  return (
      <div
          onClick={handlerBurger}
          className={css.burgerButton}>
        <div className={!isOpen
            ? css.burgerLineOpen
            : css.burgerLineClose}/>
        <div className={!isOpen
            ? css.burgerLineOpen
            : css.burgerLineClose}/>
        <div className={!isOpen
            ? css.burgerLineOpen
            : css.burgerLineClose}/>
        <div className={!isOpen
            ? css.burgerLineOpen
            : css.burgerLineClose}/>
      </div>
  )
}

const mSTP = state => (
    {
      isOpen: controllerSelectors.burgerMenu(state)
    }
)

const mDTP = {
  handlerBurger: controllerActions.handlerBurger
}

export default connect(mSTP, mDTP)(BurgerButton);