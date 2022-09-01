import React from 'react'
import Layout from '../Layout'
import {usePage} from '@inertiajs/inertia-react'

function Home() {

  const pageData = usePage();

  return (
    <Layout pageTitle={"Welcome"}>
      <div className="container">
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            <h3>Hello {pageData.props.auth.user.name}!</h3>
            <p>This you dashboard!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
