import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifs } from "state";
import Notif from "./Notif";
import { Box } from "@mui/material";

const Notification = () => {
    const dispatch = useDispatch();
    const notifs = useSelector((state) => state.notifs);
    const { role } = useSelector((state) => state.user);
    const isAdmin = true; //role === "admin";

    const getNotification = async () => {
        const response = await fetch("http://localhost:3001/student/notifs", {
            method: "GET",
        });
        const data = await response.json();
        dispatch(setNotifs({ notifs: data }));
    };

    useEffect(() => {
        getNotification();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box borderRadius={"2rem"}>
            {notifs.map(({ _id, description }) => (
                <Notif
                    key={_id}
                    notifId={_id}
                    description={description}
                    isAdmin={isAdmin}
                />
            ))}
        </Box>
    );
};

export default Notification;
