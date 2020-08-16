import styled from 'styled-components';
import { Tile } from '../layout';
import { BaseGrid } from 'components/shared/layout/styled';

export const Grid = styled(BaseGrid)`
    grid-template-columns: 1fr;
    @media (max-width: 375px) {
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
