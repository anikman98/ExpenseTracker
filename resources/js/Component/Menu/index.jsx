import React from 'react'
import {InertiaLink ,usePage} from '@inertiajs/inertia-react'
import {route} from 'ziggy-js'

const Menu = () => {

    const sharedData = usePage();

    const currentUrl = window.location.href;

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
                        <InertiaLink className={currentUrl.includes('dashboard') ? "nav-link active" : "nav-link" } href={'/dashboard'}>Home</InertiaLink>
                    </li>
                    <li className="nav-item">
                        <InertiaLink className={currentUrl.includes('expense') ? "nav-link active" : "nav-link" } href={'/expense'}>Expenses</InertiaLink>
                    </li>
                    <li className="nav-item">
                        <InertiaLink className={currentUrl.includes('stats') ? "nav-link active" : "nav-link" } href={'/stats'}>Stats</InertiaLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        {sharedData.props.auth.user ?<a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            { sharedData.props.auth.user.name }
                        </a>: ''}

                        {sharedData.props.auth.user ? <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <InertiaLink className="dropdown-item" href={'/logout'}>
                                Logout
                            </InertiaLink>

                        </div> : "" }
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu