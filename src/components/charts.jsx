import React, { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement, // Import the ArcElement for pie/doughnut charts

} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement, // Import the ArcElement for pie/doughnut charts
    Title,
    Tooltip,
    Legend,

);

function Charts() {
    const [data, setData] = useState([])
    const [chartData, setChartData] = useState(null)
    const [pieChartData, setPieChartData] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setData(data);

                const formattedChartData = {
                    labels: data.slice(0, 10).map((post) => `Post ${post.id}`),
                    datasets: [
                        {
                            label: "Data",
                            data: data.slice(0, 10).map((post) => post.body.split(" ").length),
                            backgroundColor: "rgba(255,255,255, 0.5)",
                            borderColor: "rgb(255,255,255) ",
                            borderWidth: 1,
                        },
                    ],
                };
                const userPostCounts = data.reduce((acc, post) => {
                    acc[post.userId] = (acc[post.userId] || 0) + 1;
                    return acc;
                }, {});

                setChartData(formattedChartData);

                const pieData = {
                    labels: Object.keys(userPostCounts).map((userId) => `User ${userId}`),
                    datasets: [
                        {
                            label: "Posts",
                            data: Object.values(userPostCounts),
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.5)",
                                "rgba(54, 162, 235, 0.5)",
                                "rgba(255, 206, 86, 0.5)",
                                "rgba(75, 192, 192, 0.5)",
                                "rgba(153, 102, 255, 0.5)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                            ],
                            borderWidth: 1,
                        },
                    ]
                }
                setPieChartData(pieData)
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <div className="p-4 sm:ml-64 ">
            <div className=" ">
                <div className="grid  mb-4">
                    <div className="px-3 flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="sm:text-2xl text-xl text-gray-50 ">
                            WELCOME TO THE DASHBOARD
                        </p>
                    </div>
                   
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center md:justify-evenly justify-center mb-4 rounded bg-gray-800">
                <div className="md:size-96 size-72 ">
                    {pieChartData && (
                        <Pie
                            data={pieChartData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: "right",
                                    },
                                },
                            }}
                        />
                    )}
                </div>

                <div className=" w-full md:w-1/2 h-[400px] p-4">
                    {chartData && (
                        <Bar
                            data={chartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: "top",
                                    },
                                },
                            }}
                        />
                    )}
                </div>
            </div>


            <div className="grid grid-cols-1 gap-4 mb-4 h-full">


                <div className="relative overflow-x-auto h-80">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-auto">                    
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Count
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((post) => (
                                <tr key={post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {post.id}
                                    </th>
                                    <td className="px-6 py-4">{post.title} </td>
                                    <td className="px-6 py-4">{post.userId} </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>



        </div>

    )
}

export default Charts