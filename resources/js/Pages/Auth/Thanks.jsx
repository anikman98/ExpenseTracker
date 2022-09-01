import React from 'react'
import Layout from '../../Layout'
import {InertiaLink} from '@inertiajs/inertia-react'

const Thanks = () => {
  return (
    <Layout pageTitle={""}>
        <div className="card mt-3">
            <div className="card-body">
                <h4>Thanks for registering!</h4>
                <p>Please login to continue <InertiaLink href={'/login'}>Click here.</InertiaLink></p>
            </div>
        </div>
    </Layout>
  )
}

export default Thanks
