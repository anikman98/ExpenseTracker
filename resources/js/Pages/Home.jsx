import React from 'react'
import Layout from '../Layout'
import {usePage} from '@inertiajs/inertia-react'

function Home() {

  const pageData = usePage();

  return (
    <Layout pageTitle={"Welcome"}>
      <div className="container mt-4">
        <div className="card">
          {/*<div className="card-header"></div> */}
          <div className="card-body">
            <h1>Hello {pageData.props.auth.user.name}!</h1>
            <p>This you dashboard!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;