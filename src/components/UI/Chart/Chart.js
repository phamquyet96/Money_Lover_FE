import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Master from "../Layout/Master";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const labels = [];

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart",
        },
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },

};
const RevenueChart = () => {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Income",
                data: [],
                backgroundColor: "rgba(54, 162, 235, 1)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Expense",
                data: [],
                backgroundColor: "rgb(255, 0, 0)",
                borderColor: "rgb(255, 0, 0)",
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;
        const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
        for (let i = 1; i <= daysInCurrentMonth; i++) {
            labels.push(i);
        }

        setChartData({...chartData, labels: labels})

    }, [chartData]);

    return (
        <Master>
            <Container maxWidth="md" style={{ marginTop: "1rem" }}>
                <div className="w-fullbg-white rounded-b-md h-fit flex justify-center relative ">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            typography: "body1",
                            textAlign: "center",
                            height: "100px",
                        }}
                    >
                        <div className="w-[50%] flex justify-center">
                            <div className="balance-start">
                                <p className="title-balance" style={{ fontSize: "14px" }}>
                                    Balance
                                </p>
                                <p className="balance">24.0000</p>
                            </div>
                        </div>
                        <div className="w-[50%] flex justify-center">
                            <div className="balance-end">
                                <p className="title-balance" style={{ fontSize: "14px" }}>
                                    Wallet Current
                                </p>
                                <p className="balance">74.0000</p>
                            </div>
                        </div>
                    </Box>
                </div>
                <hr />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        typography: "body1",
                        textAlign: "center",
                        height: "100px",
                    }}
                >
                    <div className="text-bar-start w-full justify-center">
                        <div className="title-bar">Renda líquida</div>
                        <div className="amount-bar" style={{ fontSize: "28px" }}>
                            35345
                        </div>
                    </div>
                </Box>
                <Box>
                    <div className="chart-report w-full justify-center">
                        <Bar options={options} data={chartData} />
                    </div>
                </Box>
            </Container>
        </Master>
    );
};

export default RevenueChart;