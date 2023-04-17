import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import authSlice from "../feature/authSlice";
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2";
import {combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['time', 'reportTime']
}

const reducer = combineReducers({
    auth: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export const persistor = persistStore(store)

export default store
