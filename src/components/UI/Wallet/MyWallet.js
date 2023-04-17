import React from 'react';
import WalletHeader from "./WalletHeader";
import MyWalletDetail from "./MyWalletDetail";

const MyWallet = () => {
    return (
        <>
            <div className='h-screen bg-custom-gray justify-center'>
                <WalletHeader/>
                <MyWalletDetail/>
            </div>
        </>
    );
};

export default MyWallet;