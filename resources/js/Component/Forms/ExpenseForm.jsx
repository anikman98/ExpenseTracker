import React, {useState} from 'react'
import { usePage, InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { route } from 'ziggy-js';

const ExpenseForm = ({expense, expense_category, payment_method, submitUrl}) => {

    const page = usePage();

    const [state, setState] = React.useState({
        id: expense.id,
        date: expense.date,
        description: expense.description || "",
        amount: expense.amount || 0.00,
        category: expense.category || expense_category[0],
        method: expense.method || payment_method[0]
    });

    const handleChange = (event) => {
        setState({
            ...state, [event.currentTarget.name]: event.currentTarget.value
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(state);
        Inertia.post(submitUrl, state);
    }

  return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" className="form-control" id="date" name="date" value={state.date} onChange={handleChange}/>
                {/*
                    page.props.errors ?.date && ( <div className='error-feedback'>{page.props.errors.date}</div>) 
                */}
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Descritption" value={state.description} onChange={handleChange}/>
                {/*
                    page.props.errors ?.description && ( <div className='error-feedback'>{page.props.errors.description}</div>) 
            */}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="number" step=".10" className="form-control" id="amount" name="amount" placeholder="00.00" value={state.amount} onChange={handleChange}/>
                {/*
                    page.props.errors ?.amount && ( <div className='error-feedback'>{page.props.errors.amount}</div>) 
        */}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select name="category" id="category" className="form-control"  value={state.category} onChange={handleChange}>
                    {
                        expense_category.map((category, index) => {
                            return (
                                <option value={category} key={index}>{category}</option>
                            )
                        })
                    }
                </select>
                {/*
                    page.props.errors ?.category && ( <div className='error-feedback'>{page.props.errors.category}</div>) 
                */}
            </div>
            <div className="mb-3">
                <label htmlFor="method" className="form-label">Payment Method</label>
                <select name="method" id="method" className="form-control"  value={state.method} onChange={handleChange}>
                    {
                        payment_method.map((paymentMethod, index) => {
                            return (
                                <option value={paymentMethod} key={index}>{paymentMethod}</option>
                            )
                        })
                    }
                </select>
                {/*
                    page.props.errors ?.payment_method && ( <div className='error-feedback'>{page.props.errors.payment_method}</div>) 
                */}
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            <span>&nbsp;&nbsp;</span><InertiaLink href={'/expense'}>Back</InertiaLink>
        </form>
  )
}

export default ExpenseForm
