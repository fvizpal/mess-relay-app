import React from "react";
import { Box, Typography } from "@mui/material";

const Notif = ({ notifId, description }) => {
    return (
        <Box
            padding={"1.5rem 1.5rem 0.75rem 1.5rem"}
            borderRadius={"0.5rem"}
            margin={"2rem 0"}
        >
            <Typography sx={{ mt: "1rem" }}>{description}</Typography>
        </Box>
    );
};

export default Notif;
