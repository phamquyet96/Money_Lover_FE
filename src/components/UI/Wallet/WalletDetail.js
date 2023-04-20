import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconWallet from "../../img/iconWallet.png";

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WalletDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState([])
    const user = useSelector((state) => state.auth.currentUser)


    useEffect(() => {
        axios.get('http://localhost:8000/api/wallet/info/' + id, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` } })
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className='h-screen bg-custom-gray justify-center'>
                <div className="w-full h-[62px] text-center">
                    <div className="w-full h-full-">
                        <div className="w-full h-[62px] bg-white shadow">
                            <div className="mx-52 h-[62px] flex ">
                                <div className="w-fit flex content-center">
                                    <a href='/my-wallet'>
                                        <FontAwesomeIcon className='mt-5 mr-8 cursor-pointer' icon={faArrowLeft} size="lg"
                                            style={{ color: "#595959", }} />
                                    </a>
                                    <p className='w-fit h-fit text-xl mt-4 font-semibold font-roboto'>My Wallets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] h-[100vh] flex justify-center'>
                    <div className='shadow-2xl bg-white rounded-md w-[665px] h-[64px] mt-10'>
                        <div
                            className='border-b rounded-t-md bg-white w-[665px] h-[64px] grid grid-cols-2 gap-2 content-center'>
                            <div>
                                <p className='text-left w-[10rem] h-fit ml-5 mt-2 font-roboto '>Wallet {Data.name}</p>
                            </div>
                            <div className='grid grid-cols-6 items-end'>
                                <div></div>
                                <div></div>
                                <button className='text-rose-400 font-roboto h-[40px] w-[80px] font-semibold rounded-lg hover:bg-rose-100'>DELETE</button>
                                <div></div>
                                <button className='text-green-400 font-roboto font-semibold h-[40px] w-[80px] rounded-lgd hover:bg-green-100'>
                                    <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${Data.id}`}>Update</Link>
                                </button>
                                <div></div>
                            </div>
                        </div>
                        <div className='h-[102px] shadow-2xl bg-white grid grid-cols-6 gap-2 content-center border-b-2'>
                            <div className=' flex justify-center'>
                                <img className='w-12'
                                    src={iconWallet}
                                    alt={iconWallet}
                                />
                            </div>
                            <div className='w-[20rem]'>
                                <p className='font-roboto font-semibold'>{Data.name}</p>
                                <p className='text-gray-400'>+{Data.includeTotal}vnd</p>
                            </div>
                        </div>
                        <div className='h-auto shadow-2xl bg-white gap-2 content-center flex-col border-b-2'>
                            <div className='pt-2 pb-2.5 pl-8 '>
                                <span>User</span>
                            </div>
                            <div className='flex flex-row pt-4 pb-4 pl-8 '>
                                <div>
                                    <div
                                        className='w-[40px] h-[40px] rounded-full bg-blue-600 text-center leading-10 text-white text-xl '>M
                                    </div>
                                </div>
                                <div className='w-fit mb-4 h-fit ml-5 font-roboto'>
                                    <div className='flex flex-row items-center'>
                                        <div
                                            className='ml-1 pl-1 text-xs px-1 py-1 h-[20px] bg-orange-400 rounded-md flex flex-row items-center text-white '>Owner
                                        </div>
                                    </div>
                                    <div className='text-xs text-gray-400'><span>{user.email}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex shadow-2xl
                        justify-center bg-white rounded-b-md hover:bg-green-100'>
                            <div className=' my-4 text-green-400 font-roboto font-semibold'>
                                <button>ADJUST BALANCE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WalletDetail;