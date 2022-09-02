import React from 'react'
import {InertiaLink ,usePage} from '@inertiajs/inertia-react'

const Menu = () => {

    const sharedData = usePage();

    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <InertiaLink className="navbar-brand" href={'/'}>{sharedData.props.appName}</InertiaLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={'/dashboard'}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu