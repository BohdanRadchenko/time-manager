import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as sessionOperations from '../../redux/session/sessionOperations'
import * as controllerSelectors from "../../redux/controller/controllerSelectors";
import css from './Register.module.css'

const Register = ({signUp, loading}) => {
  const defaultForm = {email: '', name: '', password: '', passwordAgain: ''}
  const [form, setForm] = useState(defaultForm)

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!loading) {
      signUp(form)
      // setForm(defaultForm)
    }
  }

  return (
      <div className={css.container}>
        <div className={css.decorSide}/>

        <div className={css.logicSide}>
          <form
              className={css.form}
              onSubmit={e => handleSubmit(e)}>

            <h1 className={css.title}>Welcome Aboard</h1>

            <input
                className={css.input}
                onChange={e => handleChange(e)}
                type="email"
                placeholder='email'
                name='email'
                value={form.email}/>

            <input
                className={css.input}
                onChange={e => handleChange(e)}
                type="text"
                placeholder='name'
                name='name'
                value={form.name}/>

            <input
                className={css.input}
                onChange={e => handleChange(e)}
                type="password"
                placeholder='password'
                name='password'
                value={form.password}/>

            <input
                className={css.input}
                onChange={e => handleChange(e)}
                type="password"
                placeholder='password'
                name='passwordAgain'
                value={form.passwordAgain}/>

            <div className={css.buttonWrapper}>
              <button
                  disabled={loading}
                  className={css.submitButton}
                  type='submit'>
                Sign Up
              </button>
              <NavLink
                  to='/login'
                  className={css.navlink}>
                Log In
              </NavLink>
            </div>
          </form>
        </div>
      </div>
  )
}

const mSTP = state => ({
  loading: controllerSelectors.loading(state)
})

const mDTP = {
  signUp: sessionOperations.signUp
}

export default connect(mSTP, mDTP)(Register)