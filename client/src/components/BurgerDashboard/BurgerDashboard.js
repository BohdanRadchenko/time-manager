import React from "react";
import Calendar from "../Calendar/Calendar";
import BurgerBoardsList from "../BurgerBoardsList/BurgerBoardsList";
import css from './BurgerDashboard.module.css'

const BurgerDashboard = () => {
  return (
      <div className={css.container}>
        <div className={css.calendarWrapper}>
          <Calendar/>
        </div>
        <div className={css.BurgerBoardsListWrapper}>
          <BurgerBoardsList/>
        </div>
      </div>
  )
}

export default BurgerDashboard