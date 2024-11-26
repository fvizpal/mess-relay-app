import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ResetPassword = () => {
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [doneReset, setDoneReset] = useState(false);

    const BaseUrl = process.env.REACT_APP_Backend_Url; // Fetching Base URL from .env

    const handleSubmit = async () => {
        const data = {
            newPassword: newPassword,
            confirmPassword: confirmPassword,
        };
        const response = await fetch(
            `${BaseUrl}/auth/resetpassword`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Added headers for JSON
                body: JSON.stringify(data),
            }
        );
        const done = await response.json();
        if (done) {
            setDoneReset(true);
        }
    };

    return (
        <Box
            margin={"10rem 10rem 10rem 10rem"}
            display={"flex"}
            flexDirection={"column"}
            width={"50%"}
        >
            <Header title="RESET PASSWORD" />
            <TextField
                label="NEW PASSWORD"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
                label="CONFIRM PASSWORD"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button onClick={handleSubmit}>SUBMIT</Button>
            {doneReset && (
                <>
                    <Alert variant="filled" severity="success">
                        Reset Successful
                    </Alert>
                    <Typography
                        onClick={() => navigate("/")}
                        sx={{
                            textDecoration: "underline",
                            "&:hover": {
                                cursor: "pointer",
                                color: "primary",
                            },
                        }}
                    >
                        GO TO LOGIN PAGE
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default ResetPassword;
