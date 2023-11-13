import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
    return (
        <Box>
            <Typography variant="h4" fontWeight={"bold"} mb={"5px"}>
                {title}
            </Typography>
            <Typography variant="h5">{subtitle}</Typography>
        </Box>
    );
};

export default Header;
