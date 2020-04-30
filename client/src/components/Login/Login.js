import React, {useEffect, useState} from "react";
import {NavLink,} from 'react-router-dom'
import {connect} from 'react-redux'
import * as sessionOperations from '../../redux/session/sessionOperations';
import {getLocalStorage} from "../../helpers/localStorage.helpers";
import css from './Login.module.css'

const Login = ({onLogin, reLogin}) => {
    const defaultForm = {email: '', password: '', remember: true}
    const [form, setForm] = useState(defaultForm)
    const data = getLocalStorage()

    useEffect(() => {
        if(data && data.token) {
            reLogin(data.token)
        }
    }, [getLocalStorage()])

    const handleChange = e => {
        if (e.target.name === 'remember') {
            setForm({...form, remember: !form.remember})
        }
        if (e.target.name !== 'remember') {
            setForm({...form, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        onLogin(form)
        // setForm(defaultForm)
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
                        type="password"
                        placeholder='password'
                        name='password'
                        value={form.password}/>

                    <label className={css.radioLabel}>
                        <input type="checkbox"
                               className={css.checkboxInput}
                               onChange={e => handleChange(e)}
                               name='remember'
                            checked={form.remember}
                        />
                        remember me
                    </label>

                    <div className={css.buttonWrapper}>
                        <button
                            className={css.submitButton}
                            type='submit'>
                            Login
                        </button>
                        <NavLink
                            to='/register'
                            className={css.navlink}>
                            Sign Up
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mDTP = {
    onLogin: sessionOperations.login,
    reLogin: sessionOperations.relogin
}

export default connect(null, mDTP)(Login)