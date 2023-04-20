import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    currentWallet: {
        id: '',
        name: '',
        balance: '',
        include_total: '',
        active: '',
        inflow: '',
        outflow: ''
    },
    wallets: []
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {
        getWallets(state, action) {
            state = {...state, wallets: action.payload}
            return state
        },
        changeCurrentWallet(state, action) {
            state = {...state, currentWallet: action.payload}
            return state
        },
        resetWallet(state) {
            state = initialState
            return state
        },
        resetCurrentWallet(state) {
            state = {...state, currentWallet: initialState.currentWallet}
            return state
        },
        changeWallets(state, action) {
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
        }
    }
})

export const {getWallets,changeCurrentWallet,resetWallet,resetCurrentWallet,changeWallets} = walletSlice.actions;
export default walletSlice;