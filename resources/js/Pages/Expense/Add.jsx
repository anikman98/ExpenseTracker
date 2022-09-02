import React from 'react'
import Layout from '../../Layout'
import ExpenseForm from '../../Component/Forms/ExpenseForm'

const Add = ({expense, expense_category, payment_method}) => {
  return (

    <Layout>
        <div className="container mt-3">
            <h3 className='display-6'>Add Expense</h3>
            <div className="card mt-3">
                <div className="card-body">
                    <ExpenseForm expense={expense} expense_category={expense_category} payment_method={payment_method} submitUrl={'/expense/add'} />
                </div>
            </div>
        </div>
    </Layout>

  )
}

export default Add
