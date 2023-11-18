import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
    ThumbUpOffAltOutlined,
    ThumbUpAltOutlined,
    ThumbDownOffAltOutlined,
    ThumbDownAltOutlined,
} from "@mui/icons-material";

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
        <Box borderRadius={"0.75rem"} padding="1.5rem 1.5rem 0.75rem 1.5rem">
            <Stack>
                <Typography>{description}</Typography>
                {picturePath && (
                    <img
                        width="100%"
                        height="auto"
                        alt="post"
                        style={{
                            borderRadius: "0.75rem",
                            marginTop: "0.75rem",
                        }}
                        src={`http://localhost:3001/assets/${picturePath}`}
                    />
                )}
            </Stack>
            <Stack>
                <ThumbUpOffAltOutlined />
                <ThumbUpAltOutlined />
                <ThumbDownOffAltOutlined />
                <ThumbDownAltOutlined />
            </Stack>
        </Box>
    );
};

export default Complaint;
