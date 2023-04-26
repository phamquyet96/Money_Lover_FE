import flag from "../img/Flag.svg"
import logo from "../img/logo.svg"
import lock from "../img/lock.svg"
import lock1 from "../img/lock1.svg"
import lock2 from "../img/lock2.svg"
import lock3 from "../img/lock3.svg"
import {Link} from "react-router-dom";
function HomePage(){
    return(
        <>
            <div id="container">
                <div className="container fixed top-0 inset-x-0 z-50 h-20 border-none bg-transparent">
                    <div className="z-40 w-full">
                        <nav className="flex items-center justify-between h-20 container px-48">
                            <img src={logo} className="w-48 mx-50" alt=''></img>
                            <nav className="flex justify-center space-x-3">
                                <Link to="/about"
                                   className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About Us</Link>
                                <Link to="/career"
                                   className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Career</Link>
                                <div className="flex justify-between">
                                    <img src={flag} alt='' className="w-6 h-6 my-2"></img>
                                    <Link to="/#"
                                       className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Vietnamese</Link>
                                </div>
                            </nav>
                        </nav>
                    </div>
                </div>
                <div className="mainWrapper  mt-[150px]">
                    <div className="px-48">
                        <h1 className=" font-medium text-[60px] text-green-500 text-center ">Simple way</h1>
                        <p className="flex text-40 justify-center">
                            <h1 className=" font-thin text-[60px] text-dark-brown text-center px-5 ">to manage</h1>
                            <h1 className=" font-medium text-[60px] text-green-500 text-center ">personal fiances</h1>
                        </p>
                        <div className='flex'>
                            <div className="flex gap-x-4 my-9 ml-auto mr-auto">
                                <Link to='/auth/register' ><button className=" text-green-500 rounded-lg border border-green-500 text-16 mb-4 w-[194px] h-[48px]">Sign Up</button></Link>
                                <Link to='/auth/login' ><button className="text-white rounded-lg text-16 bg-green-500 mb-4 w-[194px] h-[48px]">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container py-9 mx-auto">
                        <div className="flex px-48 justify-between">
                            <div className="flex-col py-6 p-4 rounded-lg text-center">
                                <img src={lock} alt='' className="ml-auto mr-auto "></img>
                                <p className="font-bold text-dark-tiny leading-48 text-center text-2xl"> 100% Secured data</p>
                            </div>
                            <div className="flex-col py-6 p-4 w=[280px] gap-x-6 rounded-lg items-center">
                                <img src={lock1} alt='' className="ml-auto mr-auto "></img>
                                <p className="font-bold text-dark-tiny leading-48 text-center text-2xl"> 1 Million+ users </p>
                            </div>
                            <div className="flex-col py-6 p-4 w=[280px] gap-x-6 rounded-lg items-center">
                                <img src={lock2} alt='' className="ml-auto mr-auto "></img>
                                <p className="font-bold text-dark-tiny leading-48 text-center text-2xl"> 100K+ 5-star Reviews</p>
                            </div>
                            <div className="flex-col py-6 p-4 w=[280px] gap-x-6 rounded-lg items-center">
                                <img src={lock3} alt='' className="ml-auto mr-auto "></img>
                                <p className="font-bold text-dark-tiny text-center text-2xl"> App of the day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="footer flex px-48 py-8 justify-between">
                    <p>© 2022 Finsify Technology Co., Ltd. All rights reserved.</p>
                    <nav className="flex justify-center space-x-3">
                        <span>About Us</span>
                        <span>Career</span>
                        <span>Blog</span>
                        <span>Privacy Policy</span>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default HomePage;