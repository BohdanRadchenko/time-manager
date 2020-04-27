import React, {useEffect, useState} from "react";
import axios from 'axios'

const Dashboard = () => {
    const defaultForm = {name: 'First Name', email: ""}
    const [users, setUsers] = useState()
    const [form, setForm] = useState(defaultForm)

    useEffect(() => {
        axios.get('/api/v1/user')
            .then(data => setUsers(data.data))
    }, [])
;
    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handlerSubmit = e => {
        e.preventDefault()
        if (form.email) {
            axios.post('/api/v1/user', form)
            setForm(defaultForm)
        }
    }

    return (
        <div>
            <p>
                Dashboard
            </p>
            <form onSubmit={e => handlerSubmit(e)}>
                <input
                    name='email'
                    type="text" onChange={e => handleChange(e)}/>
                <button>
                    press me..
                </button>
            </form>

            {users && (
                <ul>
                    {users.map(user =>
                        <li key={user._id}>
                            <p> {user._id} </p>
                            <p> {user.email} </p>
                            <p> {user.name} </p>
                        </li>)}
                </ul>
            )}
        </div>
    )
}

export default Dashboard