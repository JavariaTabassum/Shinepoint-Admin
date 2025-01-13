import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Charts = () => {
    // Data for the bar chart
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Monthly Registered Users",
                data: [2000, 2200, 2400, 2500, 2300, 2000, 1900, 2500, 3200, 2800, 2600, 2400],
                backgroundColor: [
                    ...Array(8).fill("#FEDB8A"), // Yellow bars
                    "#CD44EF", // Highlighted purple bar for September
                    ...Array(3).fill("#FEDB8A"),
                ],
                borderRadius: 8,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                display: false,
                grid: { color: "#F3F4F6" },
                ticks: { beginAtZero: true },
            },
        },
    };

    // Data for the doughnut chart
    const doughnutData = {
        labels: ["Basic Gym Plan", "Standard Gym Plan", "Premium Gym Plan"],
        datasets: [
            {
                data: [80, 10, 10], // Percentage of subscriptions
                backgroundColor: ["#CD44EF", "#FDCF6F", "#75B3FE"], // Custom colors
                borderWidth: 2,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "80%",
        plugins: {
            legend: {
                display: false,
            },
            tooltip: { enabled: true },
            centerText: {
                display: true,
                text: "233 Subscriptions",
            },
        },
    };

    const centerTextPlugin = {
        id: "centerText",
        beforeDraw(chart) {
            if (chart.config.type !== "doughnut") return;
            const { width } = chart;
            const { ctx } = chart;
            const textLine1 = "233";
            const textLine2 = "Subscriptions";
    
            // Apply limits or fixed sizes for font
            const fontSizeLine1 = Math.max(Math.min((width / 100) * 18, 40), 14); // Limit font size
            const fontSizeLine2 = Math.max(Math.min((width / 100) * 8, 20), 10);
    
            ctx.save();
    
            ctx.font = `bold ${fontSizeLine1}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#333";
    
            const x = chart.getDatasetMeta(0).data[0].x;
            const y = chart.getDatasetMeta(0).data[0].y;
    
            ctx.fillText(textLine1, x, y - fontSizeLine1 / 3);
    
            ctx.font = `${fontSizeLine2}px Arial`;
            ctx.fillStyle = "#000000";
            ctx.fillText(textLine2, x, y + fontSizeLine2);
    
            ctx.restore();
        },
    };
    

    ChartJS.register(centerTextPlugin);


    return (
        <div className="py-5">
            <style>
                {`
            @media (max-width: 1300px) and (min-width: 1250px){
            .cols{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }
             .legend-container {
            margin-top: -30px;
           }
            }
            @media (max-width: 400px){
            .cols{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }
             .legend {
            margin-top: -50px;
           }
            }
            @media (max-width: 1250px){
            .colos{
            flex-direction: column;
            margin-bottom: 400px;
            }
            .wid{
            width: 100%;
            }
            }
            `}
            </style>
            <div className="flex gap-5 h-[360px] colos">
                {/* Bar Chart */}
                <div className="bg-[rgba(239,218,244,0.5)] p-6 w-3/5  wid rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Monthly Registered Users</h2>
                    <p className="text-4xl font-semibold mb-4">24000</p>
                    <div className="h-64">
                        <Bar data={barData} options={barOptions} />
                    </div>

                </div>
                {/* Doughnut Chart */}
                <div className="bg-[rgba(239,218,244,1)] p-6 rounded-lg w-2/5  wid shadow-lg relative">
                    <h2 className="text-xl font-semibold mb-4">Today Subscriptions</h2>
                    <div className="flex gap-x-5 h-64 cols">
                        {/* Doughnut Chart */}
                        <div className=" w-1/2">
                            <Doughnut data={doughnutData} options={doughnutOptions} />
                        </div>
                        {/* Custom Legend */}
                        <div className="flex flex-col justify-center space-y-4 legend-container legend">
                            {doughnutData.labels.map((label, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <span
                                        className="w-4 h-4 rounded-full"
                                        style={{
                                            backgroundColor: doughnutData.datasets[0].backgroundColor[index],
                                        }}
                                    ></span>
                                    <span className="text-gray-800 text-sm font-medium">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;
