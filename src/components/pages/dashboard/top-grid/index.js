import React from 'react';
import { Tile } from 'components/shared';
import { Statistics } from './statistics';
import { Employees } from './employees';
import { Grid, GridItem } from './styled';

export const TopGrid = props => {
    return (
        <Grid>
            <Tile className="statistics" height="15em">
                <GridItem>
                    <Statistics />
                </GridItem>
            </Tile>
            <Tile className="specialization" height="15em">
                <GridItem>
                    <Employees />
                </GridItem>
            </Tile>
        </Grid>
    );
};
