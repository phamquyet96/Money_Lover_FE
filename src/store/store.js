import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice";
import walletReducer from "../feature/walletSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer
    },
})

export default store
