import React from 'react'
import Layout from '../Layout'
import {usePage} from '@inertiajs/inertia-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function Home({expenses}) {

  const pageData = usePage();

  return (
    <Layout pageTitle={"Welcome"}>
      <div className="container mt-4">
        <div className="card">
          {/*<div className="card-header"></div> */}
          <div className="card-body" style={{'textAlign': 'center'}}>
            <h1 className='display-4'>Hello {pageData.props.auth.user.name}!</h1>
            <p>This you dashboard!</p>
          </div>
        </div>
        <div className=" mt-4">
          <div className="row">
            <div className="col-md">
              <div className="card">
                <div className="card-body">
                  <h1 className='display-6 mb-4' style={{fontSize: '2em'}}>Monthly Expense</h1>
                  <Line
                    datasetIdKey='id'
                    data={{
                      labels: ['Jun', 'Jul', 'Aug'],
                      datasets: [
                        {
                          id: 1,
                          label: 'Line A',
                          data: [5, 6.5, 7],
                        },
                        {
                          id: 2,
                          label: 'Line B',
                          data: [3, 2.5, 1],
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <div className="card-body">
                    {
                      expenses.length > 0
                      ? <div className=""> 
                          <h1 className='display-6' style={{fontSize: '2em'}}>Expenses</h1>
                          <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {
                                    expenses.map((expense, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{expense.date}</td>
                                                <td>{expense.description}</td>
                                                <td>{expense.amount}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                          </table>
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
      </div>
    </Layout>
  )
}

export default Home;