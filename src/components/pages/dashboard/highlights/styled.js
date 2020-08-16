import styled from 'styled-components';
import { Tile } from 'components/shared';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    /* margin: 0.5em; */
    grid-gap: 1.25em;
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        margin: 0 1em;
    }
`;

export const AnimatedTile = styled(Tile)`
    height: 10em;
    bottom: 0;
    /* padding: 0.5em 0; */
    position: relative;
    :hover {
        cursor: pointer;
    }
    @media (min-width: 375px) {
        /* padding: 0; */
        height: 12em;
        transition: bottom 0.2s ease-in-out;
        :hover {
            bottom: 0.5em;
        }
    }
`;
