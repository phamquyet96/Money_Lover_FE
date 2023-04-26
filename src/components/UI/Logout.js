import icon from "../img/icon.png"
import logout from "../img/logout.png"
import {Link} from "react-router-dom";
function Logout(){
    return(
        <>
            <div style={{backgroundColor: 'rgb(229,231,235)', minHeight: '100vh'}}>
                <div className="flex bg-green-500 logo">
                    <Link to='/' className="flex justify-center ml-auto mr-auto">
                        <img src={icon} alt='' className="w-1/5"/>
                    </Link>
                </div>
                <div className="flex bg-gray-200 justify-center w-full">
                    <div className="bg-gray-200 pt-9">
                        <div className=" bg-white">
                            <img src={logout} alt='' className="border border-white-500"/>
                            <p className="ml-6 text-2xl justify-center py-9">Logout Success</p>
                            <Link to="/auth/login">
                                <button className="ml-6 mb-3 w-[88px] h-[36px] rounded-none bg-green-500 text-center text-white" >SIGN IN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Logout;