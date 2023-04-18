import React from 'react';
import icon from '../img/icon.png'
import { GoogleOAuthProvider} from "@react-oauth/google";
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import GoogleButton from "../Share/GoogleButton";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigate=useNavigate();

    const SignupSchema= Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    })
    return (
        <>
            <GoogleOAuthProvider
                clientId='441527544423-2k0a7strau12sutqqp6g2va34j092vd2.apps.googleusercontent.com'>
                <div className='h-screen bg-gray-200 flex justify-center'>
                    <div className="w-full h-[400px] text-center">
                        <div className="w-full h-full-">
                            <div className="w-full h-[310px] bg-custom-green"></div>
                        </div>
                        <div className='absolute w-full flex-col items-center justify-center top-[4%] md:p-1'>
                            <img className="mx-auto w-[13rem]"
                                 src={icon}
                                 alt=''
                            />
                            <p className="text-4xl text-gray-900 text-white">Money Lover</p>
                        </div>
                        <div className="absolute w-full flex flex-col items-center justify-center top-[14rem] md:p-2">
                            <div className="w-fit h-fit bg-white justify-center rounded-[20px] shadow-md p-8">
                                <h2 className="text-3xl font-bold font-roboto items-center text-gray-800 mb-6 text-center">Register</h2>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="w-[18rem] h-80 p-1">
                                        <h2 className="text-base text-left font-roboto text-gray-500 mt-1 mb-4">Using
                                            social
                                            networking accounts</h2>
                                        <form className="space-y-3">
                                            <GoogleButton/>
                                            <div>
                                                <button
                                                    className="border-2 border-blue-500  hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                    <span className="mr-2"></span>
                                                    Connect with Facebook
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="border-2 border-black  hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                    <span className="mr-2"></span>
                                                    Sign in Apple
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="border-l-2 border-gray-300 h-[12rem] mb-8 mx-2"></div>
                                    <div className="w-[18rem] h-80 p-1 mb-6">
                                        <h2 className="text-base text-left font-roboto text-gray-500 mb-4">Using Money
                                            Lover
                                            account</h2>
                                        <Formik
                                            initialValues= {
                                                { email: '', password: ''}
                                            }
                                            validationSchema={SignupSchema}
                                            onSubmit= {(values) => {
                                                console.log(values)
                                                try {
                                                    axios.post('http://localhost:8000/api/auth/register', values)
                                                        .then(Swal.fire({
                                                            position: 'center',
                                                            icon: 'success',
                                                            title: 'Register success!',
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                        }))
                                                        .then(()=>{
                                                            navigate("/auth/login")
                                                        })
                                                } catch (err) {
                                                    console.log(err.message)
                                                }}
                                            } >
                                            {({
                                                  errors,
                                                  touched,
                                                  values,
                                                  handleSubmit,
                                                  handleChange,
                                              }) => (
                                                    <form onSubmit={handleSubmit}  className="space-y-6">
                                                        <div>
                                                            <input type="email" name="email" id="email" placeholder="Email"
                                                                   onChange={handleChange}
                                                                   value={values.email}
                                                                   className="w-full font-roboto border-1 bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 outline-2 hover:outline-green-500 "/>
                                                            {errors.email && touched.email && (
                                                                <p style={{color: 'red'}}>{errors.email}</p>)}
                                                        </div>
                                                        <div>
                                                            <input type="password" name="password" id="password"
                                                                   placeholder="Password" onChange={handleChange}
                                                                   value={values.password}
                                                                   autoComplete='current-password'
                                                                   className="w-full font-roboto bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 "/>
                                                            {errors.password && touched.password && (
                                                                <p style={{color: 'red'}}>{errors.password}</p>)}
                                                        </div>
                                                        <div>
                                                            <button type="submit"
                                                                    className="w-full bg-green-500 text-white font-roboto py-2 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">REGISTER
                                                            </button>
                                                        </div>
                                                        <div className="flex">
                                                            <p>Don’t have an account?</p>
                                                            <a href="/auth/login"
                                                               className='text-green-600 decoration-green-600 decoration-1 ml-2'>Sign
                                                                In</a>
                                                        </div>
                                                    </form>
                                            )}
                                        </Formik>
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

export default Register;
