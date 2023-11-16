import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    notifs: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setNotifs: (state, action) => {
            state.notifs = action.payload.notifs;
        },
    },
});

export const { setLogin, setLogout, setNotifs } = authSlice.actions;
export default authSlice.reducer;
