import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'components/shared';
import { Statistics } from './statistics';
import { Employees } from './employees';
import { Grid, GridItem } from './styled';
import { useMediaQuery } from 'react-responsive';

const TopGrid = ({ data }) => {
    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <Grid>
            <Tile className="statistics" height={`${isMobile ? 21 : 15}em`}>
                <GridItem>
                    <Statistics data={data} />
                </GridItem>
            </Tile>
            <Tile className="specialization" height={`${isMobile ? 14 : 15}em`}>
                <GridItem>
                    <Employees data={data} />
                </GridItem>
            </Tile>
        </Grid>
    );
};

TopGrid.propTypes = {
    data: PropTypes.shape.isRequired,
};

const Memoized = React.memo(TopGrid);

export { Memoized as TopGrid };
