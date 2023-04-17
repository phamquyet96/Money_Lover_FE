import React from 'react';
import iconWallet from '../../img/iconWallet.png';
const MyWalletDetail = () => {
    return (
        <>
            <div className='w-[100vw] h-[100vh] flex justify-center'>
                <div className='shadow-lg bg-white rounded-md w-[665px] h-[110px] mt-10'>
                    <div className='border-b rounded-t-md border-gray-300 bg-gray-100 w-[665px] h-[40px]'>
                        <p className='text-left w-fit h-fit ml-5 pt-2 font-roboto text-gray-500'>Included in Total</p>
                    </div>
                    <a  href='/wallet-detail'
                        className="group block w-[665px] h-[70px] mx-auto rounded-b-md bg-white ring-1 ring-slate-900/5 hover:bg-green-100">
                        <div className='h-[70px] grid grid-cols-6 gap-2 content-center'>
                            <div className=' flex justify-center'>
                                <img className='w-12'
                                     src={iconWallet}
                                     alt={iconWallet}
                                />
                            </div>
                            <div>
                                <p className='font-roboto font-semibold'>Wallet Name</p>
                                <p className='text-gray-400'>Amount</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default MyWalletDetail;