// import {ChangeEvent, FormEvent, useState} from 'react';
import {usePage} from '@inertiajs/inertia-react';
// import {Inertia} from '@inertiajs/inertia';
import React from 'react';
import Menu from '../Component/Menu'

const Layout = ({pageTitle, children}) => {
  

    // console.log(sharedData);
  
    return (
    <div className="container">
        <Menu/>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h5>{pageTitle}</h5>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout;