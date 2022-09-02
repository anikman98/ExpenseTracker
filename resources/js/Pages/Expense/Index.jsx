import React from 'react'
import Layout from '../../Layout';
import {InertiaLink} from '@inertiajs/inertia-react'

const Expense = ({expenses}) => {
  return (
    <Layout>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className='display-4'>Expenses</h3>
                        </div>
                        <div className="col-md-6">
                            <InertiaLink className='btn btn-success float-end mt-4' href={'/expense/add'}>Add New</InertiaLink>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            {expenses.length > 0 
                                ? <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Method</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider">
                                        {
                                            expenses.map((expense, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope='row'>{expense.id}</th>
                                                        <td>{expense.date}</td>
                                                        <td>{expense.description}</td>
                                                        <td>{expense.amount}</td>
                                                        <td>{expense.category}</td>
                                                        <td>{expense.method}</td>
                                                        <td>
                                                            <InertiaLink className='btn btn-primary btn-sm' href={'/expense/edit/'+expense.id}>Edit</InertiaLink>
                                                            &nbsp;&nbsp;<InertiaLink className='btn btn-danger btn-sm' href={'/expense/delete/'+expense.id}>Delete</InertiaLink>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                  </table> 
                                : <div className="container">
                                    <p className='display-6'>No expense added</p>
                                    <p>Please add expenses.</p>
                                  </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Expense;
