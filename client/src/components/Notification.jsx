import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifs } from "state";

const Notification = () => {
    const dispatch = useDispatch();
    const notifs = useSelector((state) => state.notifs);

    const getNotification = async () => {
        const response = await fetch(
            "http://localhost:3001/admin/notification",
            {
                method: "GET",
            }
        );
        const data = await response.json();
        dispatch(setNotifs(data));
    };

    useEffect(() => {
        getNotification();
    }, []);

    return (
        <>
            {notifs.map(({ _id, description }) => {
                return (
                    <>
                        <Box
                            padding={"1.5rem 1.5rem 0.75rem 1.5rem"}
                            borderRadius={"0.5rem"}
                        >
                            <Box>{description}</Box>
                        </Box>
                        ;
                    </>
                );
            })}
        </>
    );
};

export default Notification;
