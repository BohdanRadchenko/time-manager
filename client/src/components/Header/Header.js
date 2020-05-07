import React from "react";
import {useHistory} from 'react-router-dom'
import BurgerButton from "../Buttons/BurgerButton/BurgerButton";
import HomeButton from "../Buttons/HomeButton";
import AddButton from "../Buttons/AddButton";
import BellButton from "../Buttons/BellButton";
import InfoButton from "../Buttons/InfoButton";
import css from './Header.module.css'
import ProfileUserButton
  from "../Buttons/ProfileUserButton/ProfileUserButton";

const Header = () => {
  const history = useHistory()
  const pathname = history.location.pathname
  return (
      <div className={css.container}>
        <div className={css.leftSide}>

          {pathname.includes('/dashboard')  && (
              <div className={css.burgerButtonWrapper}>
                <BurgerButton/>
              </div>
          )}

          <div className={css.homeButtonWrapper}>
            <HomeButton/>
          </div>
        </div>
        <div className={css.rightSide}>
          <div className={css.addButtonWrapper}>
            <AddButton/>
          </div>
          {pathname.includes('/dashboard') && (
              <div className={css.bellIconWrapper}>
                <BellButton/>
              </div>
          )}
          {pathname.includes('/dashboard') && (
              <div className={css.infoIconWrapper}>
                <InfoButton/>
              </div>
          )}
          <div className={css.profileButtonWrapper}>
            <ProfileUserButton/>
          </div>
        </div>
      </div>
  )
}

export default Header