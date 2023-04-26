import React from 'react';
import icon from '../img/icon.png'
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <div className='h-screen bg-gray-200 flex justify-center'>
                <div className="w-full h-[400px] text-center">
                    <div className="w-full h-full-">
                        <div className="w-full h-[310px] bg-custom-green"></div>
                    </div>
                    <div className='absolute w-full flex-col items-center justify-center top-[4%] md:p-2'>
                        <img className="mx-auto w-1/12"
                             src={icon}
                             alt=''
                        />
                        <p className="text-4xl text-gray-900 text-white">Money Lover</p>
                    </div>
                    <div className="absolute w-full flex flex-col items-center justify-center top-48 md:p-2 "  >
                        <div className="w-fit h-fit bg-white justify-center rounded-[20px] shadow-md p-8 font-size16px line-height24px" >
                            <h2 className="text-3xl font-bold font-roboto items-center text-gray-800 mb-6 text-center">Forgot Password</h2>
                            <div className="flex items-center justify-between mt-6">

                                <div className="w-[18rem] h-fit p-1 mx-auto">
                                    <h3 className="text-base text-left font-roboto text-gray-500 mb-6">Enter the email address you used to register, and we will send you an email to recover your password in no time.</h3>
                                    <form className="space-y-6">
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Email"
                                                   className="w-full font-roboto border-1 bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 outline-2 hover:outline-green-500 "/>
                                        </div>
                                        <div>


                                            <button type="submit"
                                                    className="w-full bg-green-500 text-white font-roboto py-2 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">CONFIRM
                                            </button>
                                        </div>
                                        <div>
                                            <p><Link to='/auth/login'><p className='text-green-600 decoration-green-600 decoration-1'>Back to Login</p></Link> Or <Link to='/auth/register'><p className='text-green-600 decoration-green-600 decoration-1'>Create Account</p></Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
