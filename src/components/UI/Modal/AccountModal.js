import React from 'react';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import MenuLeft from "../Dashboard/MenuLeft";
import Example from "../Dashboard/Navbar";
import ChangePassword from "./ChangePasswordModal";

const AccountModal = () => {
    return (
        <>
        <Example/>
        <div className='flex bg-custom-gray'>
            <MenuLeft/>
            <div className='w-[100vw] h-[100vh] flex justify-center'>
                <div className='shadow-2xl bg-white rounded-md w-[500px] h-[64px] mt-10'>
                    <div
                        className='border-b rounded-t-md bg-white w-[500px] h-[64px] grid grid-cols-2 gap-2 content-center'>
                        <div>
                            <p className='text-left w-fit h-fit ml-16 mt-2 text-xl font-semibold font-roboto'>My
                                Account</p>
                        </div>
                        <div className='grid grid-cols-4 items-end'>
                            <div></div>
                            <div></div>
                            <button
                                className='text-green-400 font-roboto font-semibold h-[40px] w-[100px] rounded-lg hover:bg-green-100'>SIGN
                                OUT
                            </button>
                            <div></div>
                        </div>
                    </div>
                    <div className='h-auto shadow-2xl bg-white gap-2 content-center flex-col border-b-2'>
                        <div className='flex flex-row pt-8 justify-center pb-4 pl-8 '>
                            <div>
                                <div
                                    className='w-[60px] h-[60px] rounded-full table-cell align-middle bg-blue-500 text-center text-white text-3xl '>M
                                </div>
                            </div>
                            <div className='w-fit mb-4 h-fit ml-8 font-roboto'>
                                <div className='flex flex-row items-center'>
                                    <div className='text-md mt-2'><span>accName</span></div>
                                </div>
                                <div className='text-xs mt-1 text-gray-400'><span>accEmail@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto shadow-2xl bg-white gap-2 content-center flex-col border-b-2'>
                        <div className='flex flex-col bg-orange-400 justify-center pb-4 pl-8 '>
                            <div className='text-white flex justify-center mt-3.5 mb-3.5'>
                                <span>You may adjust all of your information here!</span>
                            </div>
                            <div className='flex grid grid-cols-5 flex-row justify-center mb-3'>
                                <div></div>
                                <button
                                    className='bg-white shadow-xl hover:bg-gray-100 rounded-md hover text-orange-400'>Edit
                                    profile
                                </button>
                                <div></div>
                                <ChangePassword/>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex shadow-2xl
                        justify-center bg-gray-200 rounded-b-md hover:bg-gray-300'>
                        <div className=' my-4 text-gray-400 font-roboto font-semibold'>
                            <button>DELETE ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
    );
};

export default AccountModal;
