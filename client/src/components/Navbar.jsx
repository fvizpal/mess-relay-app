import React, { useState } from "react";
import {
    Box,
    Typography,
    Menu,
    MenuItem,
    AppBar,
    Button,
    Toolbar,
    IconButton,
} from "@mui/material";
import {
    Menu as MenuIcon,
    LightModeOutlined,
    DarkModeOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {};

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* RIGHT SUDE */}
                <Box
                    gap="1.5rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton>
                        <DarkModeOutlined />
                        <LightModeOutlined />
                    </IconButton>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Box textAlign={"left"}>
                                <Typography
                                    fontWeight={"bold"}
                                    fontSize={"0.8rem"}
                                    // sx={{ color: "primary" }}
                                >
                                    John Cina
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{
                                    color: "primary",
                                    fontSize: "25px",
                                }}
                            />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                verticle: "bottom",
                                horizontal: "center",
                            }}
                        >
                            <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
