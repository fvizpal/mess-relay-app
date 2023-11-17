import { Box, Typography } from "@mui/material";
import React from "react";

const Complaint = ({
    complaintId,
    fullName,
    room,
    description,
    picturePath,
    upvotes,
    downvotes,
    resolved,
}) => {
    return (
        <Box>
            <Typography>{fullName}</Typography>
            <Typography>{description}</Typography>
            {picturePath && (
                <img
                    width={"100%"}
                    height={"auto"}
                    alt="complaint"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                    src={`http"//localhost:3001/assets/${picturePath}`}
                />
            )}
        </Box>
    );
};

export default Complaint;
