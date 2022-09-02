import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'

const LoginForm = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        remember: ''
    });

    const handleChange = (event) => {
        setState({
            ...state, [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post('/login', state);
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={state.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={handleChange} name="password" />
            </div>
            <div className="mb-3 form-check">
                <input className="form-check-input" type="checkbox" name="remember" id="remember" onChange={handleChange} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default LoginForm