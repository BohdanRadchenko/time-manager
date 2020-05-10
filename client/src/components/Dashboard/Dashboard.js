import React, {useEffect, useState} from "react"
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerActions from '../../redux/controller/controllerActions'
import ListsContainer from "../ListsContainer/ListsContainer";
import BurgerDashboard from "../BurgerDashboard/BurgerDashboard";
import css from './Dashboard.module.css'


const Dashboard = ({burgerMenu}) => {
  return (
      <div className={css.container}>
        <div className={css.dashboardContainer}>
          <div className={burgerMenu ? css.popUpSide : css.popUpSideOff}>
            {burgerMenu && (
                <BurgerDashboard/>
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