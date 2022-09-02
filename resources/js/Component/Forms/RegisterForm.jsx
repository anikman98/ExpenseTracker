import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'
import {route} from 'ziggy-js'

const RegisterForm = () => {

    const [state, setState] = useState({
        'name' : '',
        'email' : '',
        'password' : '',
        'passwordConfirm' : ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post('/register', state);
    }

    const handleChange = (event) => {
        setState({
            ...state, [event.target.name]: event.target.value
        });
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name" name='name' value={state.name} onChange={handleChange} />
        </div> 
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={state.email} onChange={handleChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handleChange} name="password" />
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="passwordConfirm">Confitm Password</label>
            <input type="password" className="form-control" id="passwordConfirm" onChange={handleChange} name="passwordConfirm"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default RegisterForm;
