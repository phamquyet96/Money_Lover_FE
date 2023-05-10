import React from 'react';
import icon from '../img/icon.png'
import {useFormik} from "formik";
import * as Yup from "yup";
import {myAxios} from "../config/axios";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {Link, useNavigate} from "react-router-dom";
import GoogleButton from "../Share/GoogleButton";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {loggedIn} from "../../feature/authSlice";


const Login = () => {
    const [error, setError] = React.useState('');
    let dispatch = useDispatch()
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '', password: ''
        }, validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required'),
        }), onSubmit: values => {
            myAxios.post('/auth/login', values)
                .then((res) => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login success!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const {
                        accessToken,
                        refreshToken
                    } = res.data;
                    localStorage.setItem('accessToken', `${accessToken}`);
                    localStorage.setItem('refreshToken', `${refreshToken}`);
                    dispatch(loggedIn(values));
                    navigate('/my-wallet')
                })
                .catch(err => {
                    setError(err.response.data.message)

                })
        }
    })

    return (
        <>
            <GoogleOAuthProvider clientId="441527544423-2k0a7strau12sutqqp6g2va34j092vd2.apps.googleusercontent.com">
                <div className="h-screen bg-gray-200 flex justify-center">
                    <div className="w-full h-[400px] text-center">
                        <div className="w-full h-full-">
                            <div className="w-full h-[310px] bg-custom-green"></div>
                        </div>
                        <div className="absolute w-full flex-col items-center justify-center top-[4%] md:p-1">
                            <img className="mx-auto w-[13rem]" src={icon} alt="" />
                            <p className="text-4xl text-gray-900 text-white">Money Lover</p>
                        </div>
                        <div className="absolute w-full flex flex-col items-center justify-center top-[14rem] md:p-2">
                            <div className="w-fit h-fit bg-white justify-center rounded-[20px] shadow-md p-8">
                                <h2 className="text-3xl font-bold font-roboto items-center text-gray-800 mb-6 text-center">
                                    Log In
                                </h2>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="w-[18rem] h-80 p-1">
                                        <h2 className="text-base text-left font-roboto text-gray-500 mt-1 mb-4">
                                            Using social networking accounts
                                        </h2>
                                        <form className="space-y-3">
                                            <GoogleButton />
                                            <div>
                                                <button className="border-2 border-blue-500  hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                    <span className="mr-2"></span>
                                                    Connect with Facebook
                                                </button>
                                            </div>
                                            <div>
                                                <button className="border-2 border-black  hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                    <span className="mr-2"></span>
                                                    Sign in Apple
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="border-l-2 border-gray-300 h-[12rem] mb-8 mx-2"></div>
                                    <div className="w-[18rem] h-fit p-1 mb-6">
                                        <h2 className="text-base text-left font-roboto text-gray-500 mb-4">
                                            Using Money Lover account
                                        </h2>
                                        <form
                                            onSubmit={formik.handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div>
                                                {error && (
                                                    <div
                                                        className="bg-red-100 mb-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                                        role="alert"
                                                    >
                                                        <strong className="font-bold">Error! </strong>
                                                        <span className="block sm:inline">
                                {error}
                              </span>

                                                    </div>
                                                )}

                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.email}
                                                    className="w-full font-roboto border-1 bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 outline-2 hover:outline-green-500 "
                                                />
                                                {formik.errors.email && formik.touched.email && (
                                                    <p style={{ color: "red" }}>
                                                        {formik.errors.email}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.password}
                                                    autoComplete="current-password"
                                                    className="w-full font-roboto bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 "
                                                />
                                                {formik.errors.password &&
                                                    formik.touched.password && (
                                                        <p style={{ color: "red" }}>
                                                            {formik.errors.password}
                                                        </p>
                                                    )}
                                            </div>
                                            <Link to="/forgot">
                                                <p className="text-right text-green-600">
                                                    Forgot password
                                                </p>
                                            </Link>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-green-500 text-white font-roboto py-2 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                                >
                                                    LOGIN
                                                </button>
                                            </div>
                                            <div className="flex">
                                                <p>Have you an account? </p>
                                                <Link
                                                    to="/auth/register"
                                                    className="text-green-600 decoration-green-600 decoration-3 ml-2"
                                                >
                                                    Register
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GoogleOAuthProvider>
        </>
    );
};

export default Login;