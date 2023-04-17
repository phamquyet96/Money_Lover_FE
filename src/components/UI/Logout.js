import icon from "../img/icon.png"
import logout from "../img/logout.png"
function Logout(){
    return(
        <>
            <div style={{backgroundColor: 'rgb(229,231,235)', minHeight: '100vh'}}>
                <div className="flex bg-green-500 logo">
                    <a href='/' className="flex justify-center ml-auto mr-auto">
                        <img src={icon} alt='' className="w-1/5"/>
                    </a>
                </div>
                <div className="flex bg-gray-200 justify-center w-full">
                    <div className="bg-gray-200 pt-9">
                        <div className=" bg-white">
                            <img src={logout} alt='' className="border border-white-500"/>
                            <p className="ml-6 text-2xl justify-center py-9">Logout Success</p>
                            <a href="/auth/login">
                                <button className="ml-6 mb-3 w-[88px] h-[36px] rounded-none bg-green-500 text-center text-white" >SIGN IN</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Logout;