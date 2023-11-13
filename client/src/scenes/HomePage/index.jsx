import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const HomePage = () => {
    const user = useSelector((state) => state.user);
    const isAdmin = true || Boolean(user.role === "admin");

    return (
        <Box>
            {isAdmin ? (
                <>
                    <Typography>
                        HomePage content for admin will be here...
                    </Typography>
                    <Typography>will be done shortly</Typography>
                </>
            ) : (
                <>
                    <Typography>
                        HomePage content for student will be here...
                    </Typography>
                    <Typography>will be done shortly</Typography>
                </>
            )}
        </Box>
    );
};

export default HomePage;
