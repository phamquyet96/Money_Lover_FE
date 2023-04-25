import React from 'react';
import WalletHeader from "./WalletHeader";
import MyWalletDetail from "./MyWalletDetail";

const MyWallet = () => {

    const [createWalletStatus, setCreateWalletStatus] = React.useState(false);

    const sendStatusCreateWallet = (e) => {
        setCreateWalletStatus(e);
    }

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="bg-custom-gray flex-1">
                    <WalletHeader status={sendStatusCreateWallet}/>
                    <MyWalletDetail statusFinal={createWalletStatus}/>
                </div>
            </div>
        </>
    );
};

export default MyWallet;