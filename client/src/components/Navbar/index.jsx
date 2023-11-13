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
    const [anchorElement, setAnchorElement] = useState(null);
    const isOpen = Boolean(anchorElement);
    const handleClick = (event) => setAnchorElement(event.currTarget);
    const handleClose = () => setAnchorElement(null);

    return (
        <AppBar
            sx={{
                position: "static",
            }}
        >
            <Toolbar>
                {/* LEFT SIDE */}
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </IconButton>

                {/* RIGHT SUDE */}
                <IconButton>
                    <DarkModeOutlined />
                    <LightModeOutlined />
                </IconButton>
                <Button onClick={handleClick}>
                    <Box textAlign={"left"}>
                        <Typography
                            fontWeight={"bold"}
                            fontSize={"0.8rem"}
                            sx={{ color: "primary" }}
                        >
                            John Cina
                        </Typography>
                    </Box>
                    <ArrowDropDownOutlined
                        sx={{
                            color: "primary",
                        }}
                    />
                </Button>
                <Menu
                    anchorEl={anchorElement}
                    open={isOpen}
                    onClose={handleClose}
                    anchorOrigin={{
                        verticle: "bottom",
                        horizontal: "center",
                    }}
                >
                    <MenuItem onClick={handleClose}>LOG OUT</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
