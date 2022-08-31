import React from 'react'
import Layout from '../Layout';

function Home() {
  return (
    <Layout pageTitle={"Welcome"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>This you dashboard!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
