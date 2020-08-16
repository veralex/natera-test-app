import styled from 'styled-components';
import { BaseGrid } from 'components/shared/layout/styled';

export const Wrapper = styled.div`
    /* position: absolute;
    top: 15em; */
    width: 100%;
    margin-top: 8em;
`;

export const Grid = styled(BaseGrid)`
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;
`;
