import React from 'react';
import { Tile } from '../../shared';
import { Statistics } from './statistics';
import { Employees } from './employees';
import { GridWrapper, ItemWrapper } from './styled';

export const TopGrid = props => {
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
