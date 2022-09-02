import React from 'react'
import Layout from '../../Layout'
import ExpenseForm from '../../Component/Forms/ExpenseForm'

const Edit = ({expense, expense_category, payment_method}) => {
  return (

    <Layout>
        <div className="container mt-3">
            <h3 className='display-6'>Edit Expense</h3>
            <div className="card mt-3">
                <div className="card-body">
                    <ExpenseForm expense={expense} expense_category={expense_category} payment_method={payment_method} submitUrl={'/expense/update/'+expense.id} />
                </div>
            </div>
        </div>
    </Layout>

  )
}

export default Edit
