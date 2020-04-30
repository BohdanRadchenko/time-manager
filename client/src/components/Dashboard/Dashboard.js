import React, {useEffect, useState} from "react"
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerActions from '../../redux/controller/controllerActions'
import ListsContainer from "../ListsContainer/ListsContainer";
import css from './Dashboard.module.css'


const Dashboard = ({burgerMenu, handlerBurger}) => {
  return (
      <div className={css.container}>
        <button
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 20,
              height: 20,
              cursor: 'pointer'
            }}
            onClick={handlerBurger}/>
        <div className={burgerMenu ? css.popUpSide : css.popUpSideOff}>
          pop up
        </div>
        <div className={burgerMenu ? css.mainSideOff : css.mainSide}>
          <ListsContainer/>
        </div>
      </div>
  )
}

const mSTP = state => ({
  burgerMenu: controllerSelectors.burgerMenu(state),
})

const mDTP = {
  handlerBurger: controllerActions.handlerBurger
}

export default connect(mSTP, mDTP)(Dashboard)