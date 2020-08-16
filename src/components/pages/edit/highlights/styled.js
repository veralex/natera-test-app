import styled from 'styled-components';

export const Wrapper = styled.div`
    /* position: absolute;
    top: 15em; */
    width: 100%;
    margin-top: 8em;
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25em;
    grid-auto-rows: auto;
    overflow: hidden;
`;
