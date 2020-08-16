import React from 'react';
import { TopGrid } from './top-grid';
import { Highlights } from './highlights';
import { Projects } from 'components/shared/projects';
import { Notifications } from 'components/shared/notifications';

export const Dashboard = () => (
    <>
        <TopGrid />
        <Highlights />
        <Notifications />
        <Projects />
    </>
);
