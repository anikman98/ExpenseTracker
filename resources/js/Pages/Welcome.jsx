import React from 'react'
import Layout from '../Layout'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import '../../css/app.css'

const Welcome = () => {
  return (
    <Layout pageTitle={'welcome'}>
        <div className="container mt-5 welcome">
            <h1 className='display-1'>Welcome, to Expense tracker!</h1>
            <h6 className='display-6'>Your record of daily expenses.</h6>
            <div className="">
                <p>Please <InertiaLink href={'/login'}>Login</InertiaLink> or <InertiaLink href={'/register'}>Register</InertiaLink> to continue.</p>
            </div>
        </div>
    </Layout>
  )
}

export default Welcome