import {GoogleLogin, useGoogleLogin} from "@react-oauth/google";
import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export default function GoogleButton() {

    const navigate=useNavigate();

    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                await axios.post('http://localhost:8000/api/auth/login/google')
                    .then((res) => {
                        localStorage.setItem('accessToken', res.data.accessToken)
                        localStorage.setItem('refreshToken', res.data.refreshToken)
                        console.log("success")
                    })
                    Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login success!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    navigate('/my-wallet')
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