import styled from 'styled-components';

export const BaseGrid = styled.div`
    display: grid;
    grid-gap: 1.25em;
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
    }
`;
