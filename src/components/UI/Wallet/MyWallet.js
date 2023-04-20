import React from 'react';
import WalletHeader from "./WalletHeader";
import MyWalletDetail from "./MyWalletDetail";

const MyWallet = () => {
    return (
        <>
            <div className='bg-custom-gray'>
                <WalletHeader/>
                <MyWalletDetail/>
            </div>
        </>
    );
};

export default MyWallet;