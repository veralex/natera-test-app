import React from 'react';
import styled from 'styled-components';
import { SectionHeader, Tile } from '../shared';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;

const AnimatedTile = styled(Tile)`
    height: 190px;
    bottom: 0px;
    position: relative;
    transition: bottom 0.2s ease-in-out;
    &:hover {
        bottom: 8px;
    }
`;

export default props => (
    <div>
        <SectionHeader>Highlights</SectionHeader>
        <GridWrapper>
            <AnimatedTile></AnimatedTile>
            <AnimatedTile></AnimatedTile>
            <AnimatedTile></AnimatedTile>
            <AnimatedTile></AnimatedTile>
        </GridWrapper>
    </div>
);
