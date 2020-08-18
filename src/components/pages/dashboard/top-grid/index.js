import React from 'react';
import { Tile } from 'components/shared';
import { Statistics } from './statistics';
import { Employees } from './employees';
import { Grid, GridItem } from './styled';
import { useMediaQuery } from 'react-responsive';

const TopGrid = () => {
    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <Grid>
            <Tile className="statistics" height={`${isMobile ? 21 : 15}em`}>
                <GridItem>
                    <Statistics />
                </GridItem>
            </Tile>
            <Tile className="specialization" height={`${isMobile ? 14 : 15}em`}>
                <GridItem>
                    <Employees />
                </GridItem>
            </Tile>
        </Grid>
    );
};

const Memoized = React.memo(TopGrid);

export { Memoized as TopGrid };
