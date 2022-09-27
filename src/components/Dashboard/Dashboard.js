import React from 'react';
import { LineChart, Line, AreaChart, Area,BarChart, Bar, PieChart, Pie, Sector, Cell, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts';
import data from '../../utilities/product-analysis-website-main/data.json'


const Dashboard = () => {
    return (
        <div className='text-3xl my-10'>
            <p>Dashboard</p>
            <div className="charts grid grid-cols-2 gap-x-3 gap-y-20 mt-20">
                <LineChart width={400} height={300} data={data} className={'text-sm'}>
                    <Line type={'monotone'} dataKey={'sell'}/>
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                </LineChart>

                <AreaChart width={400} height={300} data={data} className={'text-sm'}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />          
                </AreaChart>

                <BarChart width={400} height={300} data={data} className={'text-sm'}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>

                <PieChart width={400} height={300} data={data} className={'text-sm'}>
                    <Tooltip />
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;