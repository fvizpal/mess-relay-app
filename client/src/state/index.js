import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    user: null,
    token: null,
    notifs: [],
    complaints: [],
    messMenu: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
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
        setUpdatedComplaint: (state, action) => {
            const updatedComplaints = state.complaints.map((complaint) => {
                if (complaint._id === action.payload.complaint._id)
                    return action.payload.complaint;
                return complaint;
            });
            state.complaints = updatedComplaints;
        },
        setMessMenu: (state, action) => {
            state.messMenu = action.payload.messMenu;
        },
        setUpdateMessMenu: (state, action) => {
            const updatedMessMenu = state.messMenu.map((menu) => {
                if (menu._id === action.payload.menu._id)
                    return action.payload.menu;
                return menu;
            });
            state.messMenu = updatedMessMenu;
        },
    },
});

export const {
    setMode,
    setLogin,
    setLogout,
    setNotifs,
    setComplaints,
    setUpdatedComplaint,
    setMessMenu,
    setUpdateMessMenu,
} = authSlice.actions;
export default authSlice.reducer;
