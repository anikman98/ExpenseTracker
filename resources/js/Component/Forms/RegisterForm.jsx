import React, {useState} from 'react'
import {Inertia} from '@inertiajs/inertia'

const RegisterForm = () => {

    const [state, setState] = useState({
        'email' : '',
        'password' : ''
    });

    const [passConfirm, setPassConfirm] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    const handleChange = (event) => {
        console.log(event);
        // if(event.currentTarget.name === 'passwordConfirm'){
        //     setPassConfirm(event.currentTarget.value);
        // }
        setState({
            ...state, [event.currentTarget.name]: event.currentTarget.value
        });
    }

  return (
    <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={state.email} onChange={handleChange} />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" onChange={handleChange} name="password" />
        </div>
        <div class="mb-3">
            <label class="form-label" for="passwordConfirm">Confitm Password</label>
            <input type="password" class="form-control" id="passwordConfirm" onChange={handleChange} name="passwordConfirm"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default RegisterForm;
