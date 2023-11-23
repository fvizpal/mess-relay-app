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
            <Box
                width={"inherit"}
                padding={"1rem 6%"}
                display={isDesktop ? "flex" : "block"}
                justifyContent={"space-between"}
            >
                <Box
                    border={"1px solid "}
                    borderRadius={"1rem"}
                    padding={"1rem 1rem 1rem 1rem"}
                    flexBasis={isDesktop ? "60%" : undefined}
                    mt={isDesktop ? undefined : "2rem"}
                >
                    <AllComplaints />
                </Box>
                <Box flexBasis={"30%"}>
                    <Notification />
                    <Box
                        borderRadius={"1rem"}
                        border={"1px solid"}
                        marginTop={"2rem"}
                        padding={"1rem 1rem 1rem 1rem"}
                    >
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
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
