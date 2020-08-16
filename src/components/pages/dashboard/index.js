import React from 'react';
import { TopGrid } from './top-grid';
import { Highlights } from './highlights';
import { Projects } from 'components/shared/projects';

export const Dashboard = () => (
    <>
        <TopGrid />
        <Highlights />
        <Projects />
    </>
);
