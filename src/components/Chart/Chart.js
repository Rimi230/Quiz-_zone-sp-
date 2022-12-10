import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, YAxis, XAxis, CartesianGrid, BarChart, Tooltip, Legend, Bar, AreaChart, Area, PieChart, Pie, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const [chartData, setChartData] = useState([]);
    const topics = useLoaderData();
    console.log(topics);


    useEffect(() => {

        const sll = topics.data.map((topic, index) => {
            return {
                total: topic.total,
                name: topic.name,
                index
            };
        })
        setChartData(sll);
    }, [topics])

    return (
        <div className='mt-12'>
            <h1 className='text-2xl lg:text-5xl text-center my-10'> Four Types Chart </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  lg:gap-10 mb-16">
                {/* Line Chart Responsive*/}

                <div className=" ">
                    <h1 className=' text-2xl ml-10 mb-4 text-center'>Line Chart: <span className='text-blue-300'>Total Quizs Per Topic</span></h1>
                    <ResponsiveContainer width="90%" height={300} className="mx-auto ">
                        <LineChart data={chartData} margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}>
                            <Line type="monotone" dataKey="total" stroke="#8884d8" />

                            <Tooltip />
                            <XAxis dataKey="name"></XAxis>
                            <YAxis ></YAxis>
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                {/* Bar Chart  Responsive*/}
                <div className="">
                    <h1 className='text-2xl ml-10 mb-4 text-center'>Bar Chart: <span className='text-blue-300'>Total Quizs Per Topic</span></h1>
                    <ResponsiveContainer width="90%" height={300} className="mx-auto ">
                        <BarChart data={chartData} margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Bar dataKey="total" stackId="a" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Area Chart  Responsive*/}
                <div className=" text-center">
                    <h1 className='text-2xl ml-10 mb-4'>Area Chart: <span className='text-blue-300'>Total Quizs Per Topic</span></h1>
                    <ResponsiveContainer width="90%" height={300} className="mx-auto ">
                        <AreaChart data={chartData}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>

                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />

                            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>



                {/* Pie Chart  Responsive*/}
                <div>
                    <ResponsiveContainer width="90%" height={300} className="mx-auto ">

                        <PieChart margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}>
                            <Tooltip />
                            <Legend />
                            <Pie data={chartData} dataKey="total" cx="50%" cy="50%" innerRadius={70} outerRadius={120} fill="#82ca9d" label />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;