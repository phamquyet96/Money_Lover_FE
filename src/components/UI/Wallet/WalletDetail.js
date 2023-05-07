import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import iconWallet from "../../img/iconWallet.png";
import {useParams, useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Swal from "sweetalert2";
import { walletActions} from "../../../feature/walletSlice";
import {myAxios} from "../../config/axios";
import UserService from "../../../services/user.service";

const WalletDetail = () => {
    const [openDelete, setOpenDelete] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [user, setUser] = useState({});
    const dispatch = useDispatch()
    const {id} = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState([])

    useEffect(() => {
        UserService.getProfile().then(res => {
            setUser(res.data.data)
        })
    }, [])

    useEffect(() => {
        myAxios.get('/wallet/info/' + id, {headers: {'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}})
            .then(res =>
                setData(res.data))
            .catch(err => console.error(err))
    }, [id])

    const deleteWalletDetail = async () => {
        await myAxios.delete(`/wallet/${id}`, {
            headers: {
                authorization: "Bearer " + localStorage.getItem('accessToken'),
            }
        }).then(res => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Delete wallet success!',
                showConfirmButton: true,
                timer: 1500
            });
            navigate("/my-wallet");
        }).catch(err => {
            console.log(err);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Delete wallet error!',
                showConfirmButton: true,
                timer: 1500
            });
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        myAxios.put('/wallet/update', Data, {headers: {'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}})
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update wallet success!',
                    showConfirmButton: true,
                    timer: 1500
                });
                dispatch(walletActions.changeCurrentWallet())
                setOpenUpdate(false);
                navigate('/my-wallet')
            }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Update wallet error!',
                showConfirmButton: true,
                timer: 1500
            });
        })
    }
    return (
        <>
            <div className='h-screen bg-custom-gray justify-center'>
                <div className="w-full h-[62px] text-center">
                    <div className="w-full h-full-">
                        <div className="w-full h-[62px] bg-white shadow">
                            <div className="mx-52 h-[62px] flex ">
                                <div className="w-fit flex content-center">
                                    <Link to={'/my-wallet'}>
                                        <FontAwesomeIcon className='mt-5 mr-8 cursor-pointer' icon={faArrowLeft}
                                                         size="lg"
                                                         style={{color: "#595959",}}/>
                                    </Link>
                                    <p className='w-fit h-fit text-xl mt-4 font-semibold font-roboto'>My Wallets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] flex justify-center'>
                    <div className='shadow-2xl bg-white rounded-md w-[665px] h-[64px] mt-10'>
                        <div
                            className='border-b rounded-t-md bg-white w-[665px] h-[64px] grid grid-cols-2 gap-2 content-center'>
                            <div>
                                <p className='text-left w-[10rem] h-fit ml-5 mt-2 text-xl font-roboto '>Wallet
                                    details</p>
                            </div>
                            <div className='grid grid-cols-6 items-end'>
                                <div></div>
                                <div></div>
                                <button
                                    onClick={() => setOpenDelete(true)}
                                    className='text-rose-400 font-roboto h-[40px] w-[80px] font-semibold rounded-lg hover:bg-rose-100'>DELETE
                                </button>
                                <div></div>
                                <button
                                    onClick={() => setOpenUpdate(true)}
                                    className='text-green-400 font-roboto h-[40px] w-[80px] font-semibold rounded-lg hover:bg-green-100'>UPDATE
                                </button>
                                <div></div>
                            </div>
                        </div>
                        <div
                            className='h-[102px] shadow-2xl bg-white grid grid-cols-6 gap-2 content-center border-b-2'>
                            <div className=' flex justify-center'>
                                <img className='w-12'
                                     src={iconWallet}
                                     alt={iconWallet}
                                />
                            </div>
                            <div className='w-[20rem]'>
                                <p className='font-roboto font-semibold'>{Data.name}</p>
                                <p className='text-gray-400'>+{Data.initialBalance?.toLocaleString('en-US', {
                                    style: 'decimal',
                                    currency: 'USD',
                                })} VND</p>
                            </div>
                        </div>
                        <div className='h-auto shadow-2xl bg-white gap-2 content-center flex-col border-b-2'>
                            <div className='pt-3 pl-9 '>
                                <span className=''>User</span>
                            </div>
                            <div className='flex flex-row pt-4 pb-4 pl-8 '>
                                <div>
                                    <div
                                        className='w-[40px] h-[40px] rounded-full bg-blue-600 text-center leading-10 text-white text-xl '>{user.name?.split("", 1)}
                                    </div>
                                </div>
                                <div className='w-fit mb-4 h-fit ml-5 font-roboto'>
                                    <div className='flex flex-row items-center'>
                                        <div className=''>{user?.name}</div>
                                        <div
                                            className='ml-1 pl-1 text-xs px-1 py-1 h-[20px] bg-orange-400 rounded-md flex flex-row items-center text-white '>Owner
                                        </div>
                                    </div>
                                    <div className='text-xs text-gray-400'><span>{user?.email}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex shadow-2xl
                        justify-center bg-white rounded-b-md hover:bg-green-100'>
                            <div className=' my-4 text-green-400 font-roboto font-semibold'>
                                <button>ADJUST BALANCE</button>
                            </div>
                        </div>
                        {openDelete ? (
                            <>
                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div
                                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                                        onClick={() => setOpenDelete(false)}
                                    ></div>
                                    <div
                                        className="relative flex justify-center mx-auto top-1/4 w-full max-w-md max-h-full">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button type="button"
                                                    onClick={() => setOpenDelete(false)}
                                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
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
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are
                                                    you sure you want to delete this account?</h3>
                                                <button type="button"
                                                        onClick={deleteWalletDetail}
                                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                    Yes, I'm sure
                                                </button>
                                                <button type="button"
                                                        onClick={() => setOpenDelete(false)}
                                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                                    cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>) : null}

                        {openUpdate ? (
                            <>
                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div
                                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                                        onClick={() => setOpenUpdate(false)}
                                    ></div>
                                    <div className="relative shadow-2xl flex justify-center mx-auto top-1/4 bottom-50 w-fit max-w-2xl h-fit">
                                        <div className=" bg-white rounded-lg shadow">
                                            <div className="flex items-start justify-between p-4 border-b rounded-t">
                                                <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                                                    Update a wallet!
                                                </h3>
                                                <button type="button"
                                                        onClick={() => setOpenUpdate(false)}
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"
                                                         viewBox="0 0 20 20"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd"
                                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                              clipRule="evenodd"></path>
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="pl-5 pt-5 relative flex content-center mx-auto">
                                                    <div className="border-2 w-[103px] h-[64px] rounded-lg">
                                                    </div>
                                                    <div
                                                        className="ml-8 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                                                        <p className='text-left text-xs mt-1 font-light ml-3'>Wallet
                                                            Name</p>
                                                        <div className='w-[328px] h-[48px] rounded-lg'>
                                                            <input type="text"
                                                                   name="name"
                                                                   className="text-black text-xl rounded-lg border-none outline-none focus:ring-0 w-full pt-1 pl-3 placeholder-gray-300"
                                                                   value={Data.name}
                                                                   onChange={e => setData({
                                                                       ...Data,
                                                                       name: e.target.value
                                                                   })}
                                                                   required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-5 mx-auto relative flex content-center">
                                                    <div className='border-2 w-[256px] h-[64px] rounded-lg'>

                                                    </div>
                                                    <div
                                                        className="ml-8 h-[64px] border rounded-lg hover:border-gray-600 border-gray-300">
                                                        <p className='text-left text-xs mt-1 font-light ml-3'>Initial
                                                            Balance</p>
                                                        <div className='w-[176px] h-[48px] rounded-lg'>
                                                            <input
                                                                type="number"
                                                                name="balance"
                                                                className="text-black text-xl border-none outline-none focus:ring-0 rounded-lg w-full pt-1 pl-3 "
                                                                value={Data?.initialBalance}
                                                                onChange={e => setData({
                                                                    ...Data,
                                                                    initialBalance: e.target.value
                                                                })}
                                                                required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                    <button type="submit"
                                                            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                        Save
                                                    </button>
                                                    <button onClick={() => setOpenUpdate(false)}
                                                            type="button"
                                                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}
export default WalletDetail;