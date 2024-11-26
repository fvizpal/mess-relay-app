import { Box, Button, InputBase } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotif } from "state";
// import { useNavigate } from "react-router-dom";

const AddNotification = () => {
    // const navigate = useNavigate();
    const BaseUrl = process.env.REACT_APP_Backend_Url; 
    
    const dispatch = useDispatch();
    const [notif, setNotif] = useState("");

    const handleNotif = async () => {
        const formData = new FormData();
        formData.append("description", notif);

        const response = await fetch(`${BaseUrl}/admin/notifs`, { 
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const notifs = await response.json();
            console.log(notifs);
            dispatch(addNotif(notifs));
            setNotif("");
        } else {
            console.error("Failed to send notification");
        }
    };

    return (
        <Box>
            <InputBase
                placeholder="To notify..."
                onChange={(e) => setNotif(e.target.value)}
                value={notif}
                sx={{
                    width: "100%",
                    borderRadius: "2rem",
                    padding: "1rem 2rem",
                }}
                multiline
                maxRows={8}
            />
            <Button disabled={!notif} onClick={handleNotif}>
                NOTIFY
            </Button>
        </Box>
    );
};

export default AddNotification;
