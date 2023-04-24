import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    categories: [],
};

export const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {
        getCates(state, action) {
            state = { ...state, categories: action.payload };
            return state;
        },
    },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;

