import React from 'react';
import { Wrapper, Bar } from './styled';

export const StatusBar = ({ status }) => (
    <Wrapper>
        <Bar status={status} />
    </Wrapper>
);
