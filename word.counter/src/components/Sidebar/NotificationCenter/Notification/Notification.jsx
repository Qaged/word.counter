import React from 'react';

import "./Notification.scss"

const Notification = ({title, content, error}) => {
    const type = error ? "error" : "correct";

    return (
        <div className={"notification " + type}>
            <p className={"not-title"}>{title}</p>
            <p className={"content"}>{content}</p>

        </div>
    );
};

export default Notification;