import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";

const Notif = ({ notifId, description, isAdmin }) => {
    return (
        <Box
            padding={"1.5rem 1.5rem 0.75rem 1.5rem"}
            borderRadius={"0.5rem"}
            margin={"2rem 0"}
        >
            <Typography sx={{ mt: "1rem" }}>{description}</Typography>
            {isAdmin && (
                <>
                    <Box>
                        <IconButton>
                            <DeleteOutlineOutlined />
                        </IconButton>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Notif;
