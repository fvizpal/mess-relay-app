import React from "react";
import { Box, Drawer, List, Typography } from "@mui/material";

const Sidebar = ({
    isAdmin,
    isDesktop,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                    }}
                >
                    <Box width="100%">
                        <Box m="2rem 2rem 2rem 2rem">
                            <Box display="flex" alignItems="center">
                                <Typography variant="h4" fontWeight={"bold"}>
                                    MESS RELAY
                                </Typography>
                            </Box>
                        </Box>
                        {isAdmin ? (
                            <List>
                                <Typography>
                                    Sidebar shall be here ...
                                </Typography>
                                <Typography>
                                    No kidding imma really put the sidebar here,
                                    dont believe ? come back after a short
                                    while.
                                </Typography>
                            </List>
                        ) : (
                            <List>
                                <Typography>
                                    Sidebar shall be here ...
                                </Typography>
                                <Typography>
                                    No kidding imma really put the sidebar here,
                                    dont believe ? come back after a short
                                    while.
                                </Typography>
                            </List>
                        )}
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
