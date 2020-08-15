import styled from 'styled-components';
import { Tile } from '../../shared';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1.25em;
`;

export const AnimatedTile = styled(Tile)`
    height: 12em;
    bottom: 0px;
    position: relative;
    transition: bottom 0.2s ease-in-out;
    &:hover {
        bottom: 8px;
        cursor: pointer;
    }
`;
