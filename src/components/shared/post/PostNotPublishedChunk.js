import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${props => props.theme.lightRed};
    display: flex;
    flex-direction: row;
    height: 12px;
    position: absolute;
    bottom: 50px;
    width: 100%;
`;

const Icon = styled.div`
    color: ${props => props.theme.darkRed};
    font-size: 12px;
`;

const Label = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.darkRed};
`;

const PostNotPublishedChunk = () => (
    <Wrapper>
        <Icon className="material-icons">visibility_off</Icon>
        <Label>Not published</Label>
    </Wrapper>
);

export { PostNotPublishedChunk };
