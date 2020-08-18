import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import {
    NotificationTile,
    NotificationContent,
    RingbellIcon,
    CloseButton,
} from './styled';

const Notification = ({ notification, hideNotification }) => {
    const container = useRef();
    const [timerID, setTimerID] = useState(null);
    const [collapsing, setCollapsing] = useState(false);

    const handleClose = useCallback(
        container => {
            if (container?.current) {
                setCollapsing(true);
                container.current.classList.add('notification-fading');
            }
            clearTimeout(timerID);
            setTimeout(() => hideNotification(notification.id), 200);
        },
        [hideNotification, notification, timerID]
    );

    useEffect(() => {
        if (!timerID)
            setTimerID(setTimeout(() => handleClose(container), 8000));
    }, [timerID, setTimerID, hideNotification, notification, handleClose]);

    return (
        <Collapse isOpened={!collapsing}>
            <NotificationTile ref={container}>
                <RingbellIcon className="material-icons">
                    notifications_none
                </RingbellIcon>
                <NotificationContent>
                    <p>{notification.text}</p>
                    <p className="notification-label-text">
                        Notification will be closed after 8 seconds
                    </p>
                </NotificationContent>
                <CloseButton
                    className="material-icons"
                    onClick={() => handleClose(container)}
                >
                    clear
                </CloseButton>
            </NotificationTile>
        </Collapse>
    );
};

Notification.propTypes = {
    notification: PropTypes.object.isRequired,
    hideNotification: PropTypes.func.isRequired,
};

const Memoized = React.memo(Notification);

export { Memoized as Notification };
