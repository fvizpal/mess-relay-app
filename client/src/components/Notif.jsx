import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteNotif } from "state";

const Notif = ({ notifId, description, isAdmin }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const BaseUrl = process.env.REACT_APP_Backend_Url; // Fetching Base URL from .env

    const handleDelete = async () => {
        const response = await fetch(
            `${BaseUrl}/admin/notifs/${notifId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const deleteResponse = await response.json();
        dispatch(deleteNotif(deleteResponse));
    };

    return (
        <Box
            borderRadius={"0.2rem"}
            m={"1rem 0"}
            ml={"1rem"}
            display={"flex"}
            width="90%"
            sx={{
                backgroundColor: theme.palette.background.main,
            }}
        >
            <Box>{description}</Box>
            {isAdmin && (
                <Box>
                    <IconButton onClick={handleDelete}>
                        <DeleteOutlineOutlined />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default Notif;
