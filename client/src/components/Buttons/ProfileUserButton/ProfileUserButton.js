import React, {createRef, useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import * as sessionSelectors
  from '../../../redux/session/sessionSelectors'
import splitName from '../../../helpers/splitName.helpers'
import css from './ProfileUserButton.module.css'

const ProfileUserButton = ({user}) => {
  const [profileBar, setProfileBar] = useState(false)
  const backdropRef = createRef();
  const name = splitName(user.name)

  const handleButtonClick = e => {

    if (!profileBar) {
      window.addEventListener('keydown',
          handleKeyPress)
    }
    if (profileBar) {
      window.removeEventListener('keydown',
          handleKeyPress)
    }
    setProfileBar(!profileBar)
  }

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    setProfileBar(false)
    window.removeEventListener('keydown', handleKeyPress)
  }

  const profileBarClose = () => {
    window.removeEventListener('keydown', handleKeyPress)
    setProfileBar(false)
  }

  return (
      <div className={css.container}>
        <button className={css.button}
                onClick={e => handleButtonClick(e)}>
          <p className={css.name}>{name}</p>
        </button>

        {profileBar && (
            <div className={css.profileWrapper}>
              <div className={css.profileHeader}>
                <button onClick={profileBarClose}
                        className={css.profileCloseButton}>
                  <div className={css.closeButtonLineOne}/>
                  <div className={css.closeButtonLineTwo}/>
                </button>
                <h3 className={css.profileUserName}>{user.name}</h3>
                <p className={css.profileUserEmail}>{`(${user.email})`}</p>
              </div>
              <ul className={css.profileMenu}>
                <li>
                  <NavLink to={`/profile:${user.id}`}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/settings`}>
                    Settings
                  </NavLink>
                </li>
              </ul>
            </div>
        )}
      </div>
  )
}

const mSTP = state => (
    {
      user: sessionSelectors.getUser(state)
    }
)

export default connect(mSTP)(ProfileUserButton)