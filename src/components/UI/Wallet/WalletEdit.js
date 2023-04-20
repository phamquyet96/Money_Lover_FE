import React from 'react';
import { useFormik } from 'formik';
import WalletService from '../../../services/wallet.service';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const WalletEdit = () => {

    const { id } = useParams();
    const formik = useFormik({
        initialValues: {
            id: id,
            name: '',
            initialBalance: ''
        },
        onSubmit: values => {
            // goi api
            WalletService.updateWallet(values).then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        },
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/wallet/info/' + id, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])


    return (
        <>


            <div id="defaultModal" tabIndex="-1"
                className="fixed top-2 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative shadow-2xl bottom-50 w-fit max-w-2xl h-fit">
                    <div className=" bg-white rounded-lg shadow">
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                                Edit wallet !
                            </h3>
                            <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="pl-5 pt-5 relative flex content-center mx-auto">
                                <div className="border-2 w-[103px] h-[64px] rounded-lg">
                                </div>
                                <div className="ml-8 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                                    <p className='text-left text-xs mt-1 font-light ml-3'>Wallet Name</p>
                                    <div className='w-[328px] h-[48px] rounded-lg'>
                                        <input style={{ border: 'none', outline: 'none' }} type="text" name="name" id="walletName"
                                            className="text-black text-xl rounded-lg w-full pt-1 pl-3 placeholder-gray-300"
                                            placeholder="Your wallet name?"
                                            onChange={e=>formik.handleChange({...data,name:e.target.value})}
                                            value={data.name}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 mx-auto relative flex content-center">
                                <div className='border-2 w-[256px] h-[64px] rounded-lg'>

                                </div>
                                <div className="ml-8 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                                    <p className='text-left text-xs mt-1 font-light ml-3'>Initial Balance</p>
                                    <div className='w-[176px] h-[48px] rounded-lg'>
                                        <input style={{ border: 'none', outline: 'none', }} type="text" name="initialBalance" id="balance"
                                            className="text-black text-xl rounded-lg w-full pt-1 pl-3 "
                                            placeholder="0"
                                            onChange={e=>formik.handleChange({...data,initialBalance:e.target.value})}
                                            value={data.initialBalance}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="defaultModal" type="submit"
                                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Save
                                </button>
                                <button data-modal-hide="defaultModal" type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WalletEdit;