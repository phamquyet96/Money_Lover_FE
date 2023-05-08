import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Master from "../Layout/Master";
import {myAxios} from "../../config/axios";
import {useDispatch, useSelector} from "react-redux";
import WalletService from "../../../services/wallet.service";
import {walletActions} from "../../../feature/walletSlice";
import {Pie} from 'react-chartjs-2';
import NavBar from "../Dashboard/Navbar";
import MenuLeft from "../Dashboard/MenuLeft";

ChartJS.register(
    ArcElement,
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
    const [data, setData] = useState([]);
    const [trans, setTrans] = useState([]);
    const dispatch = useDispatch();
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
            today.getMonth(),
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
                console.log(res.data, 555)

                setTrans(res.data.totalMoneyOutcome)
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
    }, [labels, wallet?.currentWallet?.id, wallet.currentWallet]);

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
        WalletService.getWalletOfUser()
            .then(res => {
                dispatch(walletActions.changeCurrentWallet(res.data[0]))
                setData(res.data[0]);
            })
            .catch(err => console.error(err))
    }, [wallet.currentWallet])
    useEffect(() => {
        if (chartData) {
            setloading(false);
        }
    }, [chartData]);

    return (
        <>
            <NavBar/>
            <div className="flex bg-custom-gray h-[100vh] pt-[62px]">
                <MenuLeft/>
                <div className="w-[100vw] h-fit flex justify-center">
                    <div className="shadow-2xl bg-white w-[800px] rounded mt-10">
                        <Container maxWidth="xl" style={{marginTop: "1rem"}}>
                            <div className="w-full bg-white rounded-b-md h-fit flex justify-center relative ">
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
                                            <p className="title-balance" style={{fontSize: "14px"}}>
                                                Opening balance
                                            </p>
                                            <p className="balance">{Number(data?.initialBalance - data?.balance)?.toLocaleString('en-US', {
                                                style: 'decimal',
                                                currency: 'USD',
                                            })} đ</p>
                                        </div>
                                    </div>
                                    <div className="w-[50%] flex justify-center">
                                        <div className="balance-end">
                                            <p className="title-balance" style={{fontSize: "14px"}}>
                                                Ending balance
                                            </p>
                                            <p className="balance">{data?.initialBalance?.toLocaleString('en-US', {
                                                style: 'decimal',
                                                currency: 'USD',
                                            })} đ</p>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                            <hr/>
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
                                    <div className="title-bar">Net Income</div>
                                    <div className="amount-bar" style={{fontSize: "28px"}}>
                                        {data?.balance?.toLocaleString('en-US', {
                                            style: 'decimal',
                                            currency: 'USD',
                                        })} đ
                                    </div>
                                </div>
                            </Box>
                            <Box>
                                <div className="chart-report w-full justify-center">
                                    {loading ? (
                                        null
                                    ) : (
                                        <Bar options={options} data={{labels, datasets: chartData}}/>

                                    )}
                                </div>
                            </Box>
                            <hr/>
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
                                        <p className="title-balance" style={{fontSize: "14px"}}>
                                            Income
                                        </p>
                                        <p className="balance text-blue-500">{Number(data?.balance)?.toLocaleString('en-US', {
                                            style: 'decimal',
                                            currency: 'USD',
                                        })} đ</p>
                                    </div>
                                </div>
                                <div className="w-[50%] flex justify-center">
                                    <div className="balance-end">
                                        <p className="title-balance" style={{fontSize: "14px"}}>
                                            Expense
                                        </p>
                                        <p className="balance text-red-500">{trans?.toLocaleString('en-US', {
                                            style: 'decimal',
                                            currency: 'USD',
                                        })} đ</p>
                                    </div>
                                </div>
                            </Box>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RevenueChart;