import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    currentTransaction: {
        subCate_name: '',
        wallet_name: '',
        date: '',
        note: '',
        type_name: '',
        money: ''
    },
    trans: [],
    incomeTrans: [],
    expenseTrans: [],
    statusAddTransaction: false
}

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: initialState,
    reducers: {
        getTrans(state, action) {
            state = {...state, trans: action.payload}
        },
        changeCurrentTransaction(state, action) {
            state = {...state, currentTransaction: action.payload}
        },
        getIncomeTrans(state, action) {
            state = {...state, incomeTrans: action.payload}
        },
        getExpenseTrans(state, action) {
            state = {...state, expenseTrans: action.payload}
        },
        resetTrans(state) {
            state = initialState
        },
        changeStatusAddTransaction(state, action){
            state = {...state, statusAddTransaction: true};
        }
    }
})

export const transactionActions = transactionSlice.actions;
export default transactionSlice.reducer;