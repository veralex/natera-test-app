import React, { useContext } from 'react';
import { AppContext } from 'components/context';
import {
    Wrapper,
    Grid,
    NotificationTile,
    // NotificationBody,
    NotificationContent,
    RingbellIcon,
    CloseButton,
} from './styled';
import './index.css';

export const Notifications = () => {
    const { notifications, showNotification, setShowNotification } = useContext(
        AppContext
    );

    const handleClose = e => {
        e.currentTarget
            .closest('.notification-tile')
            .classList.add('notification-fading');
        setTimeout(() => setShowNotification(false), 300);
    };

    return (
        <Wrapper>
            <Grid>
                {showNotification &&
                    notifications &&
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
            </Grid>
        </Wrapper>
    );
};
