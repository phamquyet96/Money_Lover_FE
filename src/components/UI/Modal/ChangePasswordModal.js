import React, {useState} from 'react';
import {useFormik} from "formik";
import UserService from "../../../services/user.service";
import Swal from "sweetalert2";

const ChangePassword = () => {
    const [open, setOpen] = useState(false);

    const [confirmMessage, setConfirmMessage] = useState({
        status: "",
        visible: false,
        message: "",
    });
    const checkConfirmPassword = () => {
        let passwordMatch =
            formik.values.newPassword !== formik.values.confirmPassword;
        let passwordInserted =
            formik.values.newPassword !== "" || formik.values.confirmPassword !== "";
        if (passwordMatch && passwordInserted) {
            setConfirmMessage({
                status: "danger",
                visible: true,
                message: "Password not matches",
            });
            return false;
        } else {
            setConfirmMessage({
                status: "",
                visible: false,
                message: "",
            });

            return true;
        }
    };
    const handleClose = () => {
        setConfirmMessage({
            status: "",
            visible: false,
            message: "",
        });
        setOpen(false);
    };


    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        onSubmit: (values, actions) => {
            let data = {
                oldPassword: values.oldPassword,
                newPassword: values.confirmPassword,
            };
            if (checkConfirmPassword()) {
                UserService.changePassword(data)
                    .then(() => {
                        handleClose();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Change password success!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        setConfirmMessage({
                            status: "danger",
                            visible: true,
                            message: err,
                        });
                    });

            }
            actions.resetForm();
        },
    });

    return (
        <>
            <button type="button" onClick={()=> setOpen(true)}
                    className="rounded bg-white text-orange-400">
                Change Password
            </button>
            {open ? (<div id="changePasswordModal"
                          className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className='w-[100vw] h-[100vh] flex justify-center'>
                    <div className='shadow-2xl bg-white rounded-md w-[500px] h-[64px] mt-10'>
                        <div className='border-b rounded-t-md bg-white w-[500px] h-[64px] flex '>
                            <div className="flex items-start w-[500px] justify-between p-4 border-b rounded-t">
                                <h3 className="text-xl ml-2 font-semibold text-gray-900 ">
                                    Change Your Password
                                </h3>
                                <button type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={()=>setOpen(false)}>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='h-auto shadow-2xl bg-white justify-center border-b-2'>
                            <div className='grid grid-rows-3 gap-4 pt-8 mx-auto justify-center pb-8'>
                                <div className='grid grid-cols-2'>
                                    <span className='p-1 text-center'>Old Password:</span>
                                    <input className='border rounded p-1 hover:border-gray-400' name='oldPassword' type='password'
                                           value={formik.values.oldPassword}
                                           onChange={formik.handleChange}
                                           error={
                                               formik.touched.oldPassword &&
                                               Boolean(formik.errors.oldPassword)}/>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <span className='p-1 text-center'>New Password:</span>
                                    <input className='border rounded p-1 hover:border-gray-400' name='newPassword'
                                           value={formik.values.newPassword}
                                           onChange={formik.handleChange}
                                           error={
                                               formik.touched.newPassword &&
                                               Boolean(formik.errors.newPassword)
                                           }/>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <span className='p-1 text-center'>Re Password:</span>
                                    <input className='border rounded p-1 hover:border-gray-400' name='confirmPassword'
                                           value={formik.values.confirmPassword}
                                           onChange={formik.handleChange}
                                           error={
                                               formik.touched.confirmPassword &&
                                               Boolean(formik.errors.confirmPassword)
                                           }/>
                                </div>
                            </div>
                        </div>
                        <button type='submit'
                                onClick={formik.handleSubmit}
                                className='flex shadow-2xl w-[500px]
                        justify-center bg-green-400 rounded-b-md hover:bg-green-300'>
                            <div className=' my-4 text-white font-roboto font-semibold'>
                                SAVE
                            </div>
                        </button>
                    </div>
                </div>
            </div>) : ''}
        </>
    );
};

export default ChangePassword;