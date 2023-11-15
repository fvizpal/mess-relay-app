import { Box, Typography } from "@mui/material";
import Header from "components/Header";
import React from "react";

const MessMenu = () => {
    return (
        <Box textAlign={"center"}>
            <Box>
                <Header title="MESS MENU" />
            </Box>
            <Typography>Mess menu will be shown here ...</Typography>
        </Box>
    );
};

export default MessMenu;
