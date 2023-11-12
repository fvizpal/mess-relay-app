import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const HomePage = () => {
    const isAdmin = Boolean(useSelector((state) => state.role === "admin"));

    return (
        <Box>
            {isAdmin && (
                <>
                    <Typography>
                        HomePage content for admin will be here...
                    </Typography>
                    <Typography>will be done shortly</Typography>
                </>
            )}

            <Box>
                <Typography>
                    HomePage content for student will be here...
                </Typography>
                <Typography>will be done shortly</Typography>
            </Box>
        </Box>
    );
};

export default HomePage;
