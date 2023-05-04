import * as React from "react";
import NavBar from './Navbar'
import MenuLeft from './MenuLeft';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import iconWallet from "../../img/iconWallet.png";
import {myAxios} from "../../config/axios";
import {useDispatch, useSelector} from "react-redux";

import TransactionService from "../../../services/transaction.service";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";
import Layout from "../Layout/Master";
import {walletActions} from "../../../feature/walletSlice";

let myNumber = 1000;
const date = new Date(), y = date.getFullYear(), m = date.getMonth();


function formatDate(date) {
    return date.toISOString().slice(0, 10)
}

const listTabMonth = [
    {
        label: "Last month",
        value: "1"
    },
    {
        label: "This month",
        value: "2"
    },
    {
        label: "Future",
        value: "3"
    }
];


const groupByTransactionByDate = (data) => {
    const result = data.groupBy(item => {
        return item.date;
    });

    return result
}


function Dashboard() {

    const [value, setValue] = useState("2");
    const [maxWidth, setMaxWidth] = useState(150);
    const [data, setData] = useState([]);
    const incomeRef = useRef(null);
    const [showTransactionModal, setShowTransactionModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const transaction = useSelector(state => state.transaction)
    const [dateFilter, setDateFilter] = useState({
        startDate: formatDate(new Date(y, m, 1)),
        endDate: formatDate(new Date(y, m + 1, 0))
    })
    const [totalMoneyOutcome, setTotalMoneyOutcome] = useState(0)
    const [listMonthTab, setListMonthTab] = useState(listTabMonth)

    const wallet = useSelector(state => state.wallet)
    const dispatch = useDispatch()

    useEffect(() => {
        TransactionService.getTransaction(wallet.currentWallet.id, dateFilter.startDate, dateFilter.endDate).then(res => {
            setData(res.data.transactions)
            setTotalMoneyOutcome(res.data.totalMoneyOutcome)
        })

    }, [wallet, showTransactionModal])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useLayoutEffect(() => {
        const incomeNumberDiv = incomeRef.current;
        if (incomeNumberDiv) {
            const rect = incomeNumberDiv.getBoundingClientRect();
            const width = rect.width;
            setMaxWidth(width);
        }
    }, []);
    const deleteTransaction = () => {
        TransactionService.deleteTransaction(selectedItem.id).then(res => {
            setShowTransactionModal(false)
            dispatch(walletActions.changeCurrentWallet(res.data.data))
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Layout>
            <Container maxWidth="sm" style={{marginTop: "1rem"}}>
                <div className="bg-white rounded-b-md h-fit flex justify-center relative"
                >
                    <Box sx={{width: "100%", typography: "body1"}}>
                        <TabContext value={value}>
                            <Box
                                className="flex justify-center"
                                sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                    color: "success.main",
                                }}
                            >
                                <TabList
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                    value={value}
                                >
                                    {listMonthTab && listMonthTab.map((item, index) => (
                                        <Tab key={index} label={item.label} value={item.value}/>
                                    ))}


                                </TabList>
                            </Box>
                            <TabPanel value={value}>
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <div>Inflow</div>
                                        <div
                                            className='text-inflow'>+ {(+wallet.currentWallet.balance + totalMoneyOutcome)?.toLocaleString('en-US', {
                                            style: 'decimal',
                                            currency: 'USD',
                                        })}đ
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Outflow</div>
                                        <div ref={incomeRef}
                                             className='text-rose-600'>- { Number(totalMoneyOutcome).toLocaleString('en-US', {
                                            style: 'decimal',
                                            currency: 'USD',
                                        })}đ
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-gray-300 ml-auto"
                                         style={{width: maxWidth}}></div>
                                    <div
                                        className="ml-auto">{wallet.currentWallet.balance?.toLocaleString('en-US', {
                                        style: 'decimal',
                                        currency: 'USD',
                                    })}đ
                                    </div>
                                    <div
                                        className="flex justify-center text-green-400 font-roboto font-semibold">VIEW
                                        REPORT FOR THIS PERIOD
                                    </div>
                                </div>
                                <div className="overflow-y-auto scrollbar-hide h-[600px]">
                                    <div className="left-0 right-0 h-9 mt-5 bg-gray-100 w-full"></div>
                                    {data.length > 0 && data.map((item) => (

                                        <button key={item.id} className='hover:bg-green-300 w-full'
                                                onClick={(e) => {
                                                    setSelectedItem(item)
                                                    setShowTransactionModal(true)
                                                }}>
                                            <div className="">
                                                <div className="flex my-3 justify-between">
                                                    <div className="flex ">
                                                        <div
                                                            className="ml-1.5 rounded-full bg-gray-100 w-11 h-11"></div>
                                                        <div className="grid grid-rows-2 mt-1 ml-3">
                                                            <div
                                                                className="font-semibold text-left text-sm">{item.subCategory.name}</div>
                                                            <div
                                                                className="text-gray-500 text-xs text-left">{item.date}</div>
                                                        </div>
                                                    </div>
                                                    {item.subCategory.category.id == 1 ? (
                                                        <div
                                                            className="text-center text-green-500 grid mr-2 mt-2 font-roboto font-semibold">

                                                            + {item.money.toLocaleString('en-US', {
                                                            style: 'decimal',
                                                            currency: 'USD',
                                                        })}đ
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="text-center text-red-600 grid mr-2 mt-2 font-roboto font-semibold">

                                                            - {item.money.toLocaleString('en-US', {
                                                            style: 'decimal',
                                                            currency: 'USD',
                                                        })}đ
                                                        </div>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </button>
                                    ))}

                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </Container>
            {selectedItem && showTransactionModal ? (
                    <div
                        transaction={selectedItem}>
                        <div
                            className="fixed inset-0 w-full z-10 h-full bg-black opacity-40"
                            onClick={() => setShowTransactionModal(false)}
                        ></div>
                        <div className="fixed flex justify-center top-1/4 inset-0 z-10 overflow-y-auto">
                            <div className='shadow-2xl h-fit bg-white w-fit z-30 mt-4 rounded-md'>
                                <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <button type="button"
                                                onClick={(e) => setShowTransactionModal(false)}
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path fillRule="evenodd"
                                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                      clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <div><p className='h-fit mt-1 text-2xl font-roboto '>Transaction Details</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5'>
                                        <div></div>
                                        <div></div>
                                        <button onClick={() => deleteTransaction()}
                                                className='text-rose-400 font-roboto font-semibold rounded hover:bg-rose-100'
                                        >DELETE
                                        </button>
                                        <button
                                            className='text-green-400 font-roboto font-semibold rounded hover:bg-green-100'>
                                            <Link className='text-decoration-none btn btn-sm btn-success'
                                                  to={`/update/$`}>EDIT</Link>
                                        </button>
                                        <div></div>
                                    </div>
                                </div>
                                <div className=' shadow-2xl bg-white rounded-b-md grid grid-cols-2'>
                                    <div className='flex grid grid-rows-2'>
                                        <div className='flex justify-center grid grid-cols-2 mt-4'>
                                            <div className='flex justify-center'>
                                                <img className='w-20 flex justify-center'
                                                     src={iconWallet}
                                                     alt={iconWallet}
                                                />
                                            </div>
                                            <div className='grid grid-rows-2'>
                                                <div className='text-2xl mt-1.5'>{selectedItem.subCategory.name}</div>
                                                <div className='text-sm font-roboto mt-1'>{wallet.currentWallet.name}</div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <div></div>
                                            <div className=''>
                                                <div className='text-xs text-gray-500 '>{selectedItem.date}</div>
                                                <div className='border-t-2 mt-3 w-28 mb-1.5'></div>
                                                <div className='flex'>{selectedItem.note}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid mt-6 ml-40'>
                                        {selectedItem.subCategory.category.id == 1 ? (
                                            <div
                                                className="text-left text-green-500 grid mr-2 mt-2 text-4xl font-roboto font-semibold">
                                                + {selectedItem.money.toLocaleString('en-US', {
                                                style: 'decimal',
                                                currency: 'USD',
                                            })}đ
                                            </div>
                                        ) : (
                                            <div
                                                className="text-left text-red-600 grid mr-2 mt-2 text-4xl font-roboto font-semibold">
                                                - {selectedItem.money.toLocaleString('en-US', {
                                                style: 'decimal',
                                                currency: 'USD',
                                            })}đ
                                            </div>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                : null}
        </Layout>
    );
}

export default Dashboard;