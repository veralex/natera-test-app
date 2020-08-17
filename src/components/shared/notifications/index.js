import React, { useContext } from 'react';
import { AppContext } from 'components/context';
import { Collapse } from 'react-collapse';
import {
    Wrapper,
    Grid,
    NotificationTile,
    NotificationContent,
    RingbellIcon,
    CloseButton,
} from './styled';
// import './index.css';

export const Notifications = () => {
    const { notifications, showNotification, setShowNotification } = useContext(
        AppContext
    );

    const handleClose = e => {
        e.currentTarget
            .closest('.notification-tile')
            .classList.add('notification-fading');
        setShowNotification(false);
    };

    return (
        <Wrapper>
            <Collapse isOpened={showNotification}>
                {/* <Grid> */}
                {notifications &&
                    notifications.map(notification => (
                        <NotificationTile
                            key={notification.id}
                            className="notification-tile"
                        >
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
                                onClick={handleClose}
                            >
                                clear
                            </CloseButton>
                        </NotificationTile>
                    ))}
                {/* </Grid> */}
            </Collapse>
        </Wrapper>
    );
};
