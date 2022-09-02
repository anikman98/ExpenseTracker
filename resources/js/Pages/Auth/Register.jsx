import React from 'react'
import Layout from '../../Layout'
import RegisterForm from '../../Component/Forms/RegisterForm'

const Register = () => {
  return (
    <Layout pageTitle={"Register"}>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4></h4>Register
                        </div>
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6">
                                    <RegisterForm />
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

export default Register
