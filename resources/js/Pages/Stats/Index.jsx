import React from 'react'
import Layout from '../../Layout'
import '../../../css/stats.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { Bar, PolarArea, Pie } from 'react-chartjs-2'
ChartJS.register(CategoryScale, RadialLinearScale, ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);



const Stats = ({labels, values, categories, categoryAmount, methods, methodAmount}) => {
  return (
    <Layout>
        <h1 className='display-4 mt-4 mb-4'>Stats</h1>
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md">
                        <h1 className='display-6 mb-4' style={{'fontSize': '2em'}}>Last 12 months expenses</h1>
                        <Bar 
                        className='bar-chart'
                        data={{
                                labels: labels,
                                datasets: [
                                    {
                                        label: "Monthly Expenses",
                                        data: values,
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(255, 159, 64, 0.2)',
                                            'rgba(255, 205, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(201, 203, 107, 0.2)',
                                            'rgba(201, 103, 207, 0.2)',
                                            'rgba(101, 203, 207, 0.2)',
                                            'rgba(001, 203, 207, 0.2)',
                                            'rgba(201, 003, 207, 0.2)',
                                            'rgba(201, 203, 007, 0.2)'
                                        ],
                                        borderWidth: 2,
                                        borderColor: [
                                            'rgba(255, 99, 132, 0.75)',
                                            'rgba(255, 159, 64, 0.75)',
                                            'rgba(255, 205, 86, 0.75)',
                                            'rgba(75, 192, 192, 0.75)',
                                            'rgba(54, 162, 235, 0.75)',
                                            'rgba(153, 102, 255, 0.75)',
                                            'rgba(201, 203, 107, 0.75)',
                                            'rgba(201, 103, 207, 0.75)',
                                            'rgba(101, 203, 207, 0.75)',
                                            'rgba(001, 203, 207, 0.75)',
                                            'rgba(201, 003, 207, 0.75)',
                                            'rgba(201, 203, 007, 0.75)'
                                        ]
                                    }
                                ]
                            }}
                            options = {{
                                responsize: true,
                                scales: {
                                    y: {
                                        beginAtZero: true
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md">
                        <h1 className='display-6 mb-4' style={{'fontSize': '2em'}}>Expenses by Category</h1>
                        <div className='polar-area'>
                            <PolarArea
                                
                                data={{
                                    labels: categories,
                                    datasets: [
                                        {
                                        label: categories,
                                        data: categoryAmount,
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.5)',
                                            'rgba(54, 162, 235, 0.5)',
                                            'rgba(255, 206, 86, 0.5)',
                                            'rgba(75, 192, 192, 0.5)',
                                        ],
                                        borderWidth: 1,
                                        },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md">
                        <h1 className='display-6 mb-4' style={{'fontSize': '2em'}}>Expenses by payment method</h1>
                        <div className='pie-chart'>
                            <Pie 
                                data={{
                                    labels: [...methods],
                                    datasets: [
                                        {
                                            data: methodAmount,
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.5)',
                                                'rgba(54, 162, 235, 0.5)',
                                                'rgba(255, 206, 86, 0.5)',
                                                'rgba(75, 192, 192, 0.5)',
                                            ],
                                        }
                                    ]
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Stats
