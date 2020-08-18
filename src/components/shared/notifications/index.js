import React, { useContext, useMemo } from 'react';
import { AppContext } from 'components/context';
import { Wrapper, Grid, GridRow } from './styled';
import { Notification } from './notification';

const Notifications = () => {
    const { notifications, hideNotification } = useContext(AppContext);

    const visibleNotifications = useMemo(
        () => notifications.filter(n => n.show),
        [notifications]
    );

    return (
        <Wrapper>
            <Grid>
                {visibleNotifications.map(notification => (
                    <GridRow key={notification.id}>
                        <Notification
                            notification={notification}
                            hideNotification={hideNotification}
                        />
                    </GridRow>
                ))}
            </Grid>
        </Wrapper>
    );
};

const Memoized = React.memo(Notifications);

export { Memoized as Notifications };
