import styled from 'styled-components';
import { BaseGrid } from 'components/shared/layout/styled';

export const Grid = styled(BaseGrid)`
    grid-template-columns: 5fr 3fr;
    height: 15em;
    margin-top: 4em;
    @media (max-width: 375px) {
        margin: 1em 1em 0;
        height: auto;
    }
`;

export const GridItem = styled.div`
    padding: 1.5em;
    height: 100%;
`;
