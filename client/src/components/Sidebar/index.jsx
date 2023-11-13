import React from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";

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
                        "& .MuiDrawer-paper": {
                            // color: theme.palette.secondary[200],
                            // backgroundColor: theme.palette.background.alt,
                            boxSixing: "border-box",
                            borderWidth: isDesktop ? 0 : "2px",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <Box
                                display="flex"
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Box display="flex" alignItems="center">
                                    <Typography
                                        variant="h4"
                                        fontWeight={"bold"}
                                    >
                                        MESS RELAY
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {isAdmin ? (
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary={"Dashboard"} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeOutlined />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={"Raise Complaint"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary={"Mess Menu"} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        ) : (
                            <List>
                                <Typography>Sidebar</Typography>
                                <Typography>student</Typography>
                            </List>
                        )}
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
