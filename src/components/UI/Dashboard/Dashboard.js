import * as React from "react";
import NavBar from './Navbar'
import MenuLeft from './MenuLeft';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import {useLayoutEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import iconWallet from "../../img/iconWallet.png";


function Dashboard() {
    let myNumber = 1000;
    const [value, setValue] = useState("2");
    const [maxWidth, setMaxWidth] = useState(150);
    const incomeRef = useRef(null);
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


    return (
        <div style={{backgroundColor: "#e4e4e4"}}>
            <NavBar/>
            <div className="flex">
                <MenuLeft/>
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
                                        textColor="success"
                                        // indicatorColor="success"
                                    >
                                        <Tab label="Last month" value="1"/>
                                        <Tab label="This month" value="2"/>
                                        <Tab label="future" value="3"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1"></TabPanel>
                                <TabPanel value="2">
                                    <div className="grid gap-2">
                                        <div className="flex justify-between">
                                            <div>Inflow</div>
                                            <div>+Income Number for this month</div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>Outflow</div>
                                            <div ref={incomeRef}>-Outcome Number</div>
                                        </div>
                                        <div className="border-t-2 border-gray-300 ml-auto"
                                             style={{width: maxWidth}}></div>
                                        <div className="ml-auto">Current Balance</div>
                                        <div
                                            className="flex justify-center text-green-400 font-roboto font-semibold">VIEW
                                            REPORT FOR THIS PERIOD
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="left-0 right-0 h-9 mt-5 bg-gray-100"></div>
                                        <div className="border border-gray-200">
                                            <div className="flex my-3 justify-between">
                                                <div className="grid gap-2 grid-cols-2">
                                                    <div className="text-4xl text-center font-roboto">23</div>
                                                    <div className="grid grid-rows-2 mt-1">
                                                        <div className="text-gray-500 font-semibold text-xs">Sunday
                                                        </div>
                                                        <div className="text-gray-500 text-xs">April 2023</div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="text-center grid mr-2 mt-2 font-roboto font-semibold">+-Number
                                                </div>
                                            </div>
                                        </div>
                                        <button className='hover:bg-green-300 w-full'
                                                data-modal-target="transaction-modal"
                                                data-modal-toggle="transaction-modal">
                                            <div className="">
                                                <div className="flex my-3 justify-between">
                                                    <div className="grid gap-0.5 grid-cols-2">
                                                        <div
                                                            className="ml-1.5 rounded-full bg-gray-100 w-11 h-11"></div>
                                                        <div className="grid grid-rows-2 mt-1">
                                                            <div className="font-semibold text-sm">Category</div>
                                                            <div className="text-gray-500 text-xs text-left">Note</div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="text-center grid mr-2 mt-2 font-roboto font-semibold">+-Number
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </TabPanel>
                                <TabPanel value="3"></TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </Container>
                <div id="transaction-modal" tabIndex="-1"
                     className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className='shadow-2xl h-fit bg-white w-fit mt-4 rounded-md'>
                        <div className='border-b h-14 bg-white grid grid-cols-2 content-center'>
                            <div className='grid grid-cols-2 gap-2'>
                                <button type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mx-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="transaction-modal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div><p className='h-fit mt-1 text-2xl font-roboto '>Transaction Details</p></div>
                            </div>
                            <div className='grid grid-cols-5'>
                                <div></div>
                                <div></div>
                                <button
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
                                        <div className='text-2xl mt-1.5'>Category</div>
                                        <div className='text-sm font-roboto mt-1'>userName</div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div></div>
                                    <div className=''>
                                        <div className='text-xs text-gray-500 '>Sunday,23/04/2023</div>
                                        <div className='border-t-2 mt-3 w-28 mb-1.5'></div>
                                        <div className='flex'>Note</div>

                                    </div>
                                </div>
                            </div>
                            <div className='grid mt-6 ml-40'>
                                <div className={myNumber>= 0 ? 'text-green-400 text-5xl' : 'text-red-400 text-5xl'}>
                                    {myNumber >= 0 ? '+' : '-'}{Math.abs(myNumber)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Dashboard;