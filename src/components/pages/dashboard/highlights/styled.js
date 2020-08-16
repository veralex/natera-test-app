import styled from 'styled-components';
import { Tile } from 'components/shared';
import { BaseGrid } from 'components/shared/layout/styled';

export const Grid = styled(BaseGrid)`
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 375px) {
        margin: 0 1em;
    }
`;

export const AnimatedTile = styled(Tile)`
    height: 10em;
    bottom: 0;
    position: relative;
    :hover {
        cursor: pointer;
    }
    @media (min-width: 375px) {
        height: 12em;
        transition: bottom 0.2s ease-in-out;
        :hover {
            bottom: 0.5em;
        }
    }
`;
