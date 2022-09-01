import React from 'react'
import Layout from '../../Layout'
import LoginForm from '../../Component/Forms/LoginForm'

const Login = () => {
  return (
    <Layout pageTitle={'Login'}>
        <div className="container">
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <LoginForm/>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </Layout>
  )
}

export default Login