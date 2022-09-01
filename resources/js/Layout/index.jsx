// import {ChangeEvent, FormEvent, useState} from 'react';
import {usePage} from '@inertiajs/inertia-react';
// import {Inertia} from '@inertiajs/inertia';
import React from 'react';
import Menu from '../Component/Menu'

const Layout = ({pageTitle, children}) => {
  
    return (
    <div className="container">
        <Menu/>
        <div className="d-flex justify-content-center">
            <div className="container">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout;