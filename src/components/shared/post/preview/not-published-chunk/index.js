import React from 'react';
import { Wrapper, Icon, Label } from './styled';

const NotPublishedChunk = () => (
    <Wrapper>
        <Icon className="material-icons">visibility_off</Icon>
        <Label>Not published</Label>
    </Wrapper>
);

const Memoized = React.memo(NotPublishedChunk);

export { Memoized as NotPublishedChunk };
