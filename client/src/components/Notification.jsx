import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifs } from "state";
import Notif from "./Notif";

const Notification = () => {
    const dispatch = useDispatch();
    const notifs = useSelector((state) => state.notifs);
    const token = useSelector((state) => state.token);

    const getNotification = async () => {
        const response = await fetch("http://localhost:3001/student/notifs", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setNotifs({ notifs: data }));
    };

    useEffect(() => {
        getNotification();
    }, []);

    console.log(notifs);

    // return (
    //     // <>
    //     //     {notifs.map(({ _id, description }) => (
    //     //         <Notif key={_id} notifId={_id} description={description} />
    //     //     ))}
    //     // </>
    // );
};

export default Notification;
