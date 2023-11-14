import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "components/Header";

const HomePage = () => {
    // const user =
    const { firstName, role } = useSelector((state) => state.user);
    const isAdmin = role === "admin";
    const subtitle = "Welcome " + firstName + "!";
    return (
        <Box m="1.5rem 2.5rem">
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Header title="DASHBOARD" subtitle={subtitle} />
            </Box>

            {isAdmin ? (
                <>
                    <Typography>
                        HomePage content for {firstName} will be here...
                    </Typography>
                    <Typography>will be done shortly</Typography>
                </>
            ) : (
                <>
                    <Typography>
                        HomePage content for student {firstName} will be here...
                    </Typography>
                    <Typography>will be done shortly</Typography>
                </>
            )}
        </Box>
    );
};

export default HomePage;
