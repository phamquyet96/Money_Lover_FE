import React from 'react';
import { useEffect } from "react";
import { useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import iconWallet from '../../img/iconWallet.png';
import {myAxios} from "../../config/axios";


const MyWalletDetail = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        myAxios.get('/wallet')
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [navigate])

    return (
        <>
<<<<<<< HEAD
            <div className=' w-[100vw] flex justify-center'>
=======
            <div className=' w-[100vw] flex justify-center min-h-screen'>
>>>>>>> a42a7131ffa7b67343bda00e483f460d308eb6da
                <div className='group inline-block'>
                        <div  className='shadow-lg bg-gray-100 rounded-md w-[665px] h-[110px] mt-10'>
                            <div className='border-b rounded-t-md border-gray-300 bg-gray-100 w-[665px] h-[40px]'>
                                <p className='text-left w-fit h-fit ml-5 pt-2 font-roboto text-gray-500'>Wallets</p>
                            </div>
                            {data && data.map((wallet, index) => (
                            <Link key={wallet.id} to={'/wallet-detail/' + wallet.id }
                                  className="group block w-[665px] h-[70px] mx-auto bg-white ring-1 ring-slate-900/5 hover:bg-green-100">
                                <div className='h-[70px] grid grid-cols-6 gap-2 content-center'>
                                    <div className=' flex justify-center'>
                                        <img className='w-12'
                                             src={iconWallet}
                                             alt={iconWallet}
                                        />
                                    </div>
                                    <div>
<<<<<<< HEAD
                                        <p className='font-roboto font-semibold w-[10rem]'>{value.name}</p>
                                        <p className='text-gray-400 w-[10rem]'>+{value.include_total} </p>
=======
                                        <p className='font-roboto font-semibold w-[10rem]'>{wallet.name}</p>
                                        <p className='text-gray-400 w-[10rem]'>+{wallet.include_total.toLocaleString('en-US', {
                                            style: 'decimal',
                                            currency: 'USD',
                                        })} VND</p>
>>>>>>> a42a7131ffa7b67343bda00e483f460d308eb6da
                                    </div>
                                </div>
                            </Link>
                            ))}
                        </div>

                </div>

            </div>
        </>
    );
};

export default MyWalletDetail;