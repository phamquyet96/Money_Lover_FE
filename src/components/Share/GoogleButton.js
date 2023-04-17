import {GoogleLogin, useGoogleLogin} from "@react-oauth/google";
import axios from "axios";
import React from "react";
import {authActions} from "../../feature/authSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function GoogleButton() {

    const dispatch = useDispatch()

    const navigate=useNavigate();

    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                axios.post('http://localhost:8000/api/auth/login/google')
                    .then((res) => {
                        localStorage.setItem('accessToken', res.data.accessToken)
                        localStorage.setItem('refreshToken', res.data.refreshToken)
                        console.log("success")
                        navigate('/dashboard')
                    })
            } catch (err) {
                console.log(err)
            }
        }
    })

    return (
        <>

            <GoogleLogin onSuccess={()=>login()}>
                <button className="border-2 border-rose-500  hover:bg-red-400 hover:text-white text-red-400 font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">Connect with Google</button>
            </GoogleLogin>
        </>
    )
}