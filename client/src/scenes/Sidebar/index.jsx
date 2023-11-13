import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Sidebar = () => {
    const user = useSelector((state) => state.user);
    const isAdmin = user.role === "admin";
    const isDesktop = useMediaQuery("(min-width:600px)");
    const drawerWidth = "250px";

    return (
        <Box>
            {isAdmin ? (
                <>
                    <Typography>Sidebar shall be here ...</Typography>
                    <Typography>
                        No kidding imma really put the sidebar here, dont
                        believe ? come back after a short while.
                    </Typography>
                </>
            ) : (
                <>
                    <Typography>Sidebar shall be here ...</Typography>
                    <Typography>
                        No kidding imma really put the sidebar here, dont
                        believe ? come back after a short while.
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default Sidebar;
