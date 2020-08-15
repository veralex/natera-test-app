import styled from 'styled-components';

export const Wrapper = styled.div`
    /* position: absolute; */
    width: 100%;
    top: 15em;
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25em;
    grid-auto-rows: auto;
    overflow: hidden;
`;
