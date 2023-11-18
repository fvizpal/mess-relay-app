import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "components/Header";
import AddNotification from "components/AddNotification";
import Notification from "components/Notification";
import AllComplaints from "components/AllComplaints";
import MealRating from "components/MealRating";

const HomePage = () => {
    const { firstName, role } = useSelector((state) => state.user);
    const isAdmin = role === "admin";
    const subtitle = "Welcome " + firstName + "!";
    const isDesktop = useMediaQuery("(min-width: 600px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Header title="DASHBOARD" subtitle={subtitle} />
            </Box>
            <Box>
                <AllComplaints />
            </Box>
            <Box>
                <Notification />
            </Box>

            {isAdmin ? (
                <>
                    <AddNotification />
                </>
            ) : (
                <>
                    <MealRating />
                </>
            )}
        </Box>
    );
};

export default HomePage;
