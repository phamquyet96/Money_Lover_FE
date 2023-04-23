import React from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import iconWallet from '../../img/iconWallet.png';
import { useSelector } from 'react-redux';


const MyWalletDetail = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/wallet', { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])


    return (
        <>
            <div className=' w-[100vw] flex justify-center'>
                <div className='group inline-block'>
                    {data.map((value, index) => (
                        <div className='shadow-lg bg-gray-100 rounded-md w-[665px] h-[110px] mt-10'>
                            <div className='border-b rounded-t-md border-gray-300 bg-gray-100 w-[665px] h-[40px]'>
                                <p className='text-left w-fit h-fit ml-5 pt-2 font-roboto text-gray-500'>Wallets</p>
                            </div>
                            <Link to={'/wallet-detail/' + value.id }
                                className="group block w-[665px] h-[70px] mx-auto rounded-b-md bg-white ring-1 ring-slate-900/5 hover:bg-green-100">
                                <div className='h-[70px] grid grid-cols-6 gap-2 content-center'>
                                    <div className=' flex justify-center'>
                                        <img className='w-12'
                                            src={iconWallet}
                                            alt={iconWallet}
                                        />
                                    </div>
                                    <div>
                                        <p className='font-roboto font-semibold w-[10rem]'>{value.name}</p>
                                        <p className='text-gray-400 w-[10rem]'>+{value.include_total} </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default MyWalletDetail;