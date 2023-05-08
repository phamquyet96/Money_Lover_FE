import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    currentWallet: {},
    wallets: []
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        getWallets: (state, action) => {
            state = {...state, wallets: action.payload}
            return state
        },
        changeCurrentWallet: (state, action) => {
            state.currentWallet = action.payload
        },
        resetWallet: (state) => {
            state = initialState
            return state
        },
        resetCurrentWallet: (state) => {
            state = {...state, currentWallet: initialState.currentWallet}
            return state
        },
        changeWallets (state, action) {
            const id = +action.payload.walletId
            const value = action.payload.walletInfo
            let allWallet = [];
            let others = [];
            state.wallets.map(wallet => {
                if (wallet.id === id) {
                    allWallet.push(wallet)
                } else {
                    others.push(wallet)
                }
            })
            allWallet[0] = value
            state.wallets = [...others, ...allWallet]
        },
        deleteWallet: (state, action) => {
            const id = action.payload;
            state.wallets = state.wallets.filter(wallet => wallet.id !== id);
            return state;
        },
    }
})

// export const {deleteWallet, changeCurrentWallet,changeWallets} = walletSlice.actions;
export const walletActions = walletSlice.actions;
export default walletSlice.reducer;
