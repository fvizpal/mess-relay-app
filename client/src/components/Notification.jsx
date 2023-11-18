import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifs } from "state";
import Notif from "./Notif";
import { Box } from "@mui/material";

const Notification = () => {
    const dispatch = useDispatch();
    const notifs = useSelector((state) => state.notifs);
    const { role } = useSelector((state) => state.user);
    const isAdmin = role === "admin";

    const getNotifs = async () => {
        const response = await fetch(
            "http://localhost:3001/student/complaints",
            {
                method: "GET",
            }
        );
        const data = await response.json();
        dispatch(setNotifs({ complaints: data }));
    };

    useEffect(() => {
        getNotifs();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box>
            {/* {notifs.map(({ _id, description }) => (
                <Notif
                    key={_id}
                    notifId={_id}
                    description={description}
                    isAdmin={isAdmin}
                />
            ))} */}
        </Box>
    );
};

export default Notification;
