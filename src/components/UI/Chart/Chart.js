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
import { myAxios } from "../../config/axios";
import {  useSelector } from "react-redux";


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
    const wallet = useSelector((state) => state.wallet);
            // TransactionService.getTransaction(wallet.currentWallet?.id, dateFilter.startDate, dateFilter.endDate).then(res => {

  const [labels, setLabels] = useState([]);
  const [loading, setloading] = useState(true);
  const [chartData, setChartData] = useState(null);

  // chamar o api: 
  // 
 
  useEffect(() => {
    const today = new Date();
        const lastDayOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        );
        const firstDayOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() ,
          1
        );
    myAxios
      .get("/transaction/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
          walletId: wallet?.currentWallet?.id,
          startDate: firstDayOfMonth,
          endDate: lastDayOfMonth,
        },
    
      })
      .then((res) => {
        const transactions = res.data.transactions;
        let maptransactionsExpense = {};
        let maptransactionsIncome = {};
        transactions.forEach((transaction) => {
          const transactionDay = new Date(transaction.date).getDate();
          if (transaction.subCategory.category.id === 2) {
            maptransactionsExpense[transactionDay] =
              transaction.money + (maptransactionsExpense[transactionDay] || 0);
            return;
          }
          maptransactionsIncome[transactionDay] =
            transaction.money + (maptransactionsIncome[transactionDay] || 0);
        });
        setChartData([
          {
            label: "Income",
            data: labels.map((label) => maptransactionsIncome[label] || 0),
            backgroundColor: "rgba(54, 162, 235, 1)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Expense",
            data: labels.map((label) => maptransactionsExpense[label] || 0),
            backgroundColor: "rgb(255, 0, 0)",
            borderColor: "rgb(255, 0, 0)",
            borderWidth: 1,
          },
        ]);
      })
      //
      .catch((err) => console.error(err));
  }, [labels, wallet?.currentWallet?.id]);

  useEffect(() => {
        const today = new Date();
        const lastDayOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        ).getDate();
        const newLabels = [...Array(lastDayOfMonth).keys()].map((x) => ++x);
        setLabels(newLabels);
    
  }, []);

  useEffect(() => {
    if (chartData) {
      setloading(false);
    }
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
                  Saldo Inicial
                </p>
                <p className="balance">24.0000</p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center">
              <div className="balance-end">
                <p className="title-balance" style={{ fontSize: "14px" }}>
                  Saldo Inicial
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
            {loading ? (
              null
            ) : (
                          <Bar options={options} data={{labels, datasets: chartData}} />

            )}
          </div>
        </Box>
      </Container>
    </Master>
  );
};

export default RevenueChart;
