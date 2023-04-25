import {createSlice} from "@reduxjs/toolkit";
import moment from "moment/moment";

let initialState = {
    name: 'This Month',
    value: moment()
}

export const timeSlice = createSlice({
    name: 'time',
    initialState: initialState,
    reducers: {
        changeTime(state, action) {
            state = action.payload;
            return state
        },
        resetTime(state, action) {
            state = initialState;
            return state
        }
    }
})

export const timeActions = timeSlice.actions;
export default timeSlice;