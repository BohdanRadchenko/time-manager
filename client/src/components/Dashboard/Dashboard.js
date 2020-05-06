import React, {useEffect, useState} from "react"
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerActions from '../../redux/controller/controllerActions'
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import ListsContainer from "../ListsContainer/ListsContainer";
import css from './Dashboard.module.css'


const Dashboard = ({burgerMenu}) => {
  return (
      <div className={css.container}>
        <Header/>
        <Modal/>
        <div className={css.dashboardContainer}>
          <div className={burgerMenu ? css.popUpSide : css.popUpSideOff}>
            {burgerMenu && (
                <p>
                  pop up
                </p>
            )}
          </div>
          <div className={burgerMenu ? css.mainSideOff : css.mainSide}>
            <ListsContainer/>
          </div>
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