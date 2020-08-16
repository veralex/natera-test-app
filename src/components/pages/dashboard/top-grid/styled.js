import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    height: 15em;
    grid-gap: 1.25em;
    margin-top: 4em;
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        margin: 1em 1em 0;
        height: auto;
    }
`;

export const GridItem = styled.div`
    padding: 1.5em;
    height: 100%;
`;
