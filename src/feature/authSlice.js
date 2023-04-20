import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    isLoggedIn: false,
    currentUser: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loggedIn: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = {email : action.payload.email,name : action.payload.name}
            return state
        },
        loggedOut: (state) => {
            state = initialState
            return state
        },
        updateUser: (state, action) => {
            state.currentUser = {...state.currentUser, image: action.payload}
            return state
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            const user = state.users.findIndex(user => user.id === userId);

            if (user !== -1) {
                state.users.splice(user, 1);
            }
            if (state.currentUser && state.currentUser.id === userId) {
                state = initialState;
            }
            return state;

        }
    }
})

export const {loggedIn, loggedOut, updateUser, deleteUser} = authSlice.actions;
export default authSlice;
