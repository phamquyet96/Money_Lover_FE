import React, {useEffect, useState} from 'react';
import MenuLeft from "../Dashboard/MenuLeft";
import NavBar from "../Dashboard/Navbar";
import ChangePassword from "./ChangePasswordModal";
import {useNavigate, useParams} from "react-router-dom";
import {myAxios} from "../../config/axios";
import {useDispatch} from "react-redux";
import {deleteUser, loggedOut} from "../../../feature/authSlice";
import Swal from "sweetalert2";
import UpdateProfileModal from "./UpdateProfileModal";



const AccountModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const [Data, setData] = useState([])
    const [open, setOpen] = useState(false)


    useEffect(() => {
        myAxios.get('/user/account/' + id, {headers: {'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}})
            .then(res => setData(res.data))
            .catch(err => console.error(err))

    }, [])

    const Logout = async () => {
        try {
            await myAxios.get("/auth/logout");
            localStorage.clear()
            dispatch(loggedOut);
            navigate("/auth/logout");
        } catch (err) {
            console.error(err);
        }
    }
    const Delete = async () => {
        try {
            await myAxios.delete(`/user/account/${id}`, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem('accessToken'),
                }
            });
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            dispatch(deleteUser);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Delete success!',
                showConfirmButton: true,
                timer: 1500
            });
            navigate("/auth/login");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <NavBar/>
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
                                    onClick={Logout}
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
                                        className='w-[60px] h-[60px] rounded-full table-cell align-middle bg-blue-500 text-center text-white text-3xl '>{Data.name?.split("",1)}
                                    </div>
                                </div>
                                <div className='w-fit mb-4 h-fit ml-8 font-roboto'>
                                    <div className='flex flex-row items-center'>
                                        <div className='text-md mt-2'><span>{Data.name}</span></div>
                                    </div>
                                    <div className='text-xs mt-1 text-gray-400'><span>{Data.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto shadow-2xl bg-white gap-2 content-center flex-col border-b-2">
                            <div className="flex flex-col bg-orange-400 justify-center pb-4 pl-8 ">
                                <div className="text-white flex justify-center mt-3.5 mb-3.5">
                                    <span>You may adjust all of your information here!</span>
                                </div>
                                <div className="flex grid grid-cols-5 flex-row justify-center mb-3">
                                    <div></div>
                                    <UpdateProfileModal/>
                                    <div></div>
                                    <ChangePassword/>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex shadow-2xl justify-center bg-gray-200 rounded-b-md hover:bg-gray-300">
                            <div className=" my-4 text-gray-400 font-roboto font-semibold">
                                <button onClick={e=>setOpen(true)}
                                    data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                >DELETE ACCOUNT</button>
                            </div>
                        </div>
                                <div id="popup-modal" tabIndex="-1"
                                     className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-md max-h-full">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button type="button" onClick={()=>setOpen(false)}
                                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                                    data-modal-hide="popup-modal">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"
                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                            <div className="p-6 text-center">
                                                <svg aria-hidden="true"
                                                     className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are
                                                    you sure you want to delete this account?</h3>
                                                <button data-modal-hide="popup-modal" type="button" onClick={Delete}
                                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                    Yes, I'm sure
                                                </button>
                                                <button data-modal-hide="popup-modal" type="button" onClick={()=>setOpen(false)}
                                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                                    cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountModal;