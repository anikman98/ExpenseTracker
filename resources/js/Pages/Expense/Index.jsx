import React from 'react'
import Layout from '../../Layout';
import {InertiaLink} from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import Pagination from '../../Component/Pagination';

const Expense = ({expenses}) => {

    const handleDelete = (id) => {
        const confirmDelete = confirm('Are you sure?');
        if(confirmDelete){
            Inertia.get('/expense/delete/'+id);
        }
    }

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
                    <div className="card mt-3 mb-4">
                        <div className="card-body">
                            {expenses.data.length > 0
                                ? <div className="table-responsive">
                                    <table className="table">
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
                                        <tbody className="table-group-divider">
                                            {
                                                expenses.data.map((expense, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope='row'>{((expenses.current_page-1)*5)+index+1}</th>
                                                            <td>{expense.date}</td>
                                                            <td>{expense.description}</td>
                                                            <td>{expense.amount}</td>
                                                            <td>{expense.category}</td>
                                                            <td>{expense.method}</td>
                                                            <td>
                                                                <InertiaLink className='btn btn-primary btn-sm' href={'/expense/edit/'+expense.id}>Edit</InertiaLink>
                                                                &nbsp;&nbsp;<button className='btn btn-danger btn-sm' onClick={() => handleDelete(expense.id)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination links={expenses.links}/>
                                  </div>
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
