import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
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
        setUpdatedComplaint: (state, action) => {
            const updatedComplaints = state.complaints.map((complaint) => {
                if (complaint._id === action.payload.complaint._id)
                    return action.payload.complaint;
                return complaint;
            });
            state.complaints = updatedComplaints;
        },
    },
});

export const {
    setLogin,
    setLogout,
    setNotifs,
    setComplaints,
    setUpdatedComplaint,
} = authSlice.actions;
export default authSlice.reducer;
