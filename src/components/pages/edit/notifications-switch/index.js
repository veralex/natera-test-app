import React, { useContext, useState } from 'react';
import { AppContext } from 'components/context';
import { SectionHeader, Switch } from 'components/shared';
import { Wrapper } from './styled';

const NotificationsSwitch = () => {
    const { showAllNotifications } = useContext(AppContext);
    const [show, setShow] = useState(false);

    const handleSwitch = value => {
        setShow(value);
        showAllNotifications({ show: value });
    };
    return (
        <>
            <SectionHeader>Notifications</SectionHeader>
            <Wrapper>
                <Switch
                    label="Show all notifications"
                    onChange={handleSwitch}
                    value={show}
                />
            </Wrapper>
        </>
    );
};

const Memoized = React.memo(NotificationsSwitch);

export { Memoized as NotificationsSwitch };
