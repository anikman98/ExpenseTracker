import React from 'react'

const RegisterForm = () => {

    const [state, setState] = useState({
        'email' : '',
        'password' : ''
    });

    const handleSubmit = ({event}) => {
        event.preventDefault();

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
            <input type="password" class="form-control" id="password" onChange={handleChange} />
        </div>
        <div class="mb-3 form-check">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            <input type="password" class="form-check-input" id="exampleCheck1" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default RegisterForm;
