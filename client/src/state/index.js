import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    notifs: [],
    complaints: [],
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
        setComplaints: (state, action) => {
            state.complaints = action.payload.complaints;
        },
    },
});

export const { setLogin, setLogout, setNotifs, setComplaints } =
    authSlice.actions;
export default authSlice.reducer;
