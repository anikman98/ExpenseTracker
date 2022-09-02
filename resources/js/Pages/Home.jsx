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


function Home() {

  const pageData = usePage();

  return (
    <Layout pageTitle={"Welcome"}>
      <div className="container mt-4">
        <div className="card">
          {/*<div className="card-header"></div> */}
          <div className="card-body" style={{'text-align': 'center'}}>
            <h1 className='display-4'>Hello {pageData.props.auth.user.name}!</h1>
            <p>This you dashboard!</p>
          </div>
        </div>
        <div className=" mt-4">
          <div className="row">
            <div className="col-md">
              <div className="card">
                <div className="card-body">
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
                    Expense list
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