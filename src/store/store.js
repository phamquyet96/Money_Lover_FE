import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice";
import walletReducer from "../feature/walletSlice";
import transactionReducer from "../feature/transactionSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer,
        transaction: transactionReducer
    },
})

export default store
