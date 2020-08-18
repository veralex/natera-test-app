import React from 'react';
import { Highlights } from './highlights';
import { Projects } from 'components/shared/projects';
import { NotificationsSwitch } from './notifications-switch';

const Edit = () => (
    <>
        <Highlights />
        <Projects edit />
        <NotificationsSwitch />
    </>
);

const Memoized = React.memo(Edit);

export { Memoized as Edit };
