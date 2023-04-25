import React from 'react';
import WalletHeader from "./WalletHeader";
import MyWalletDetail from "./MyWalletDetail";

const MyWallet = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="bg-custom-gray flex-1">
                    <WalletHeader/>
                    <MyWalletDetail/>
                </div>
            </div>
        </>
    );
};

export default MyWallet;