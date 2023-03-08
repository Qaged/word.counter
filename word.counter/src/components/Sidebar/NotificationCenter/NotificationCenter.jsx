import React from 'react';

import "./NotificationCenter.scss"

import Notification from "./Notification/Notification.jsx";

const NotificationCenter = (props) => {
    return (
        <div className={"notification-center"}>
            <p className={"title"}>Notifications</p>

            <Notification title={"You reached 100 words!"} content={"The word limit of 100 words is reached!"}
                          error={false}/>
            <Notification title={"You reached 150 words!"} content={"The word limit of 150 words is reached!"}
                          error={true}/>
        </div>
    );
};

export default NotificationCenter;