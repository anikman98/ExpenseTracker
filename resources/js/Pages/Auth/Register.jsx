import React from 'react'
import Layout from '../../Layout'
import RegisterForm from '../../Component/Forms/RegisterForm'

const Register = () => {
  return (
    <Layout pageTitle={"Register"}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Register
                        </div>
                        <div className="card-body">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Register
