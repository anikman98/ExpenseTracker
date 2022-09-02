import React from 'react'
import Layout from '../../Layout'
import LoginForm from '../../Component/Forms/LoginForm'

const Login = () => {
  return (
    <Layout pageTitle={"Login"}>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4></h4>Login
                        </div>
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-5">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Login