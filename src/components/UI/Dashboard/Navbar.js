import React, {useEffect, useState} from "react";
import {
    Navbar,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import logo from '../../img/ic_category_all.png';
import AddTransactionModal from "./AddTransaction/AddTransactionModal";
import {Link} from "react-router-dom";
import {myAxios} from "../../config/axios";
import WalletService from "../../../services/wallet.service";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentWallet} from "../../../feature/walletSlice";



export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const wallet = useSelector(state => state.wallet)
    useEffect(() => {
        WalletService.getWalletOfUser()
            .then(res => {
                dispatch(changeCurrentWallet(res.data[0]))
                setData(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const changeCurrentWalletMenu = (wallet) => {
        dispatch(changeCurrentWallet(wallet))
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <svg href="#"
                 className="h-8 w-8 text-gray-500"
                 width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>

            <svg href="#"
                 className="h-8 w-8 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg>

            <svg href="#"
                 className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </ul>
    );

    return (
        <>

            <Navbar className="sticky inset-0 z-10 h-[62px] max-w-full rounded-none py-2 px-4 lg:px-8 ">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="flex">

                        <Typography
                            className="mr-4 cursor-pointer py-1.5 font-medium "
                        >
                            <Link to={"/dashboard"}>
                                <img className="mx-auto w-[13rem]"
                                     src={logo}
                                     alt=''
                                     style={{ width: 27, height: 28 }}
                                />
                            </Link>

                        </Typography>

                        <div className="flex text-black" >

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    className="text-white bg-custom-gray focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">
                                {wallet.currentWallet?.name }
                                <svg className="w-4 h-4 ml-2" aria-hidden="true"
                                                                       fill="none" stroke="currentColor"
                                                                       viewBox="0 0 24 24"
                                                                       xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 9l-7 7-7-7"></path>
                            </svg></button>
                            <div id="dropdown"
                                 className="w-[400px] z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <div aria-labelledby="dropdownDefaultButton"
                                    className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest
                                            Customers</h5>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="w-8 h-8 rounded-full"
                                                             src="/docs/images/people/profile-picture-1.jpg"
                                                             alt="Neil image"/>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Total
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">

                                                        </p>
                                                    </div>
                                                    <div
                                                        className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        {wallet.currentWallet.includeTotal?.toLocaleString('en-US', {
                                                            style: 'decimal',
                                                            currency: 'USD',})} VND
                                                    </div>
                                                </div>
                                            </li>
                                            { data.length > 0 && data.map(wallet => (
                                                    <li key={wallet.id} className="py-3 sm:py-4" onChange={() => changeCurrentWalletMenu(wallet)}>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="flex-shrink-0">
                                                                <img className="w-8 h-8 rounded-full"
                                                                     src="/docs/images/people/profile-picture-3.jpg"
                                                                     alt="Bonnie image"/>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                    {wallet.name}
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                {wallet.includeTotal.toLocaleString('en-US', {
                                                                    style: 'decimal',
                                                                    currency: 'USD',})} VND
                                                            </div>
                                                        </div>
                                                    </li>

                                            )) }

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <AddTransactionModal/>
                        <IconButton
                            variant="text"
                            className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
            </Navbar>
        </>
    );
}