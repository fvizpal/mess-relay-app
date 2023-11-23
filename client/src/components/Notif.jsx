import React from "react";
import { Box, IconButton } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteNotif } from "state";

const Notif = ({ notifId, description, isAdmin }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        const response = await fetch(
            `http://localhost:3001/admin/notifs/${notifId}`,
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
            borderRadius={"0.5rem"}
            m={"1rem 0"}
            ml={"1rem"}
            // border={"1px solid"}
            display={"flex"}
            width="90%"
        >
            <Box>{description}</Box>
            {isAdmin && (
                <>
                    <Box>
                        <IconButton onClick={handleDelete}>
                            <DeleteOutlineOutlined />
                        </IconButton>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Notif;
