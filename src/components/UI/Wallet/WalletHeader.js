import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import AddWalletModal from "./AddWalletModal";
import {Link} from "react-router-dom";

const WalletHeader = ({status}) => {

    const getStatusModal = (e) => {
        status(e);
    }

    return (
        <>
            <div className="w-full h-[62px] text-center">
                <div className="w-full h-full-">
                    <div className="w-full h-[62px] bg-white shadow">
                        <div className="mx-52 h-[62px] flex ">
                            <div className="w-fit flex">
                                <Link to="/dashboard">
                                    <FontAwesomeIcon className='mt-5 mr-8 cursor-pointer' icon={faArrowLeft} size="lg"
                                                     style={{color: "#595959",}}/>
                                </Link>
                                <p className='w-fit h-fit text-xl mt-4 font-semibold font-roboto'>My Wallets</p>
                                <AddWalletModal statusWallet={getStatusModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WalletHeader;