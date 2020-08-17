import React from 'react';
import { Highlights } from './highlights';
import { Projects } from 'components/shared/projects';
import { NotificationsSwitch } from './notifications-switch';

export const Edit = () => (
    <>
        <Highlights />
        <Projects edit />
        <NotificationsSwitch />
    </>
);
