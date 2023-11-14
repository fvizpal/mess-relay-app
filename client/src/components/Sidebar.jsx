import React from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import {
    HomeOutlined,
    ChevronLeft,
    ReceiptLongOutlined,
    CalendarMonthOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Sidebar = ({
    isAdmin,
    isDesktop,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const navigate = useNavigate();

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
                            // color: "primary",
                            // backgroundColor: "primary",
                            boxSixing: "border-box",
                            borderWidth: isDesktop ? "0.5px" : "2px",
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
                                {!isDesktop && (
                                    <IconButton
                                        onClick={() =>
                                            setIsSidebarOpen(!isSidebarOpen)
                                        }
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </Box>
                        </Box>
                        {isAdmin ? (
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/home`);
                                        }}
                                    >
                                        <ListItemIcon>
                                            <HomeOutlined />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={"AdminDashboard"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/complaint`);
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ReceiptLongOutlined />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={"Raise Complaint"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/menu`);
                                        }}
                                    >
                                        <ListItemIcon>
                                            <CalendarMonthOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary={"Mess Menu"} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        ) : (
                            <List>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/home`);
                                        }}
                                    >
                                        <ListItemIcon>
                                            <HomeOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary={"Dashboard"} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/complaint`);
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ReceiptLongOutlined />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={"Raise Complaint"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/menu`);
                                        }}
                                    >
                                        <ListItemIcon>
                                            <CalendarMonthOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary={"Mess Menu"} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        )}
                    </Box>
                    <Box position={"absolute"} bottom={"2rem"}>
                        <Divider />
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <ListItemButton
                                onClick={() => {
                                    window.open(
                                        "https://sac.mnnit.ac.in/codesangam",
                                        "_blank"
                                    );
                                }}
                            >
                                <ListItemText primary={"CodeSangam"} />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => {
                                    window.open(
                                        "https://mnnit.ac.in",
                                        "_blank"
                                    );
                                }}
                            >
                                <ListItemText primary={"MNNIT"} />
                            </ListItemButton>
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
