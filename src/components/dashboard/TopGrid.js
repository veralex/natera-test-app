import React from 'react';
import styled from 'styled-components';
import { Tile } from '../shared';
import { Statistics, Employees } from '.';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-template: [row1-start] 'statistics specialization' [row1-end];
    height: 240px;
    column-gap: 20px;
    margin-top: 60px;
`;

const ItemWrapper = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
`;

const TopGrid = props => {
    return (
        <GridWrapper>
            <Tile className="statistics">
                <ItemWrapper>
                    <Statistics />
                </ItemWrapper>
            </Tile>
            <Tile className="specialization">
                <ItemWrapper>
                    <Employees />
                </ItemWrapper>
            </Tile>
        </GridWrapper>
    );
};

export default TopGrid;
