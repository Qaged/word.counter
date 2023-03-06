import React from 'react';

import "./Notification.scss"

const Notification = (props) => {
    return (
        <div className={"notification"}>
            <p className={"title"}>Notifications</p>

            <p className={"not-title"}>Notification</p>
            <p className={"content"}>This is a sample notification</p>
        </div>
    );
};

export default Notification;