import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-template: [row1-start] 'statistics specialization' [row1-end];
    height: 15em;
    column-gap: 1.25em;
    margin-top: 4em;
`;

export const ItemWrapper = styled.div`
    padding: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
`;
