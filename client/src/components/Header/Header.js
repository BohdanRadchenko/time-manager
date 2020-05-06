import React from "react";
import BurgerButton from "../Buttons/BurgerButton/BurgerButton";
import HomeButton from "../Buttons/HomeButton";
import AddButton from "../Buttons/AddButton";
import BellButton from "../Buttons/BellButton";
import InfoButton from "../Buttons/InfoButton";
import css from './Header.module.css'
import ProfileUserButton from "../Buttons/ProfileUserButton/ProfileUserButton";

const Header = () => {
  return (
      <div className={css.container}>
        <div className={css.leftSide}>
          <div className={css.burgerButtonWrapper}>
            <BurgerButton/>
          </div>
          <div className={css.homeButtonWrapper}>
            <HomeButton/>
          </div>
        </div>
        <div className={css.rightSide}>
          <div className={css.addButtonWrapper}>
            <AddButton/>
          </div>
          <div className={css.bellIconWrapper}>
            <BellButton/>
          </div>
          <div className={css.infoIconWrapper}>
            <InfoButton/>
          </div>
          <div className={css.profileButtonWrapper}>
            <ProfileUserButton/>
          </div>
        </div>
      </div>
  )
}

export default Header