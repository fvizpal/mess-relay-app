import React from "react";

const Notification = () => {
    const getNotification = async () => {
        const response = await fetch(
            "http://localhost:3001/admin/notification",
            {
                method: "GET",
            }
        );
        const data = await response.json();
    };

    return <div>Notification</div>;
};

export default Notification;
