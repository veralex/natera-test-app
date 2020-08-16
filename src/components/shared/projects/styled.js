import styled from 'styled-components';
import { Tile } from '../tile';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 1.25em;
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        margin: 0 1em 0.5em;
    }
`;

export const TableTile = styled(Tile)`
    height: fit-content;
    padding: 1.5em;
    /* @media (max-width: 375px) {
        width: 375px;
        margin: 1em;
    } */
`;
