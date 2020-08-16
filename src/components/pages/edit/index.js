import React from 'react';
import { Highlights } from './highlights';
import { Projects } from 'components/shared/projects';

export const Edit = () => (
    <>
        <Highlights />
        <Projects edit />
    </>
);
