import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const HomePage = () => {
    const isAdmin = Boolean(useSelector((state) => state.role === "admin"));

    return (
        <Box>
            <Typography>mai kar dunga</Typography>
        </Box>
    );
};

export default HomePage;
