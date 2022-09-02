import React from 'react'
import Layout from '../Layout'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

const Welcome = () => {
  return (
    <Layout>
        <div className="container mt-5">
            <h1 className='display-3'>Welcome, to Expense tracker!</h1>
            <h5>Your record of daily expenses.</h5>
            <div className="">
                <p>Please <InertiaLink href={'/login'}>Login</InertiaLink> or <InertiaLink href={'/register'}>Register</InertiaLink> to continue.</p>
            </div>
        </div>
    </Layout>
  )
}

export default Welcome