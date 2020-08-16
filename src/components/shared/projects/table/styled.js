import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    th {
        text-align: left;
    }
    th,
    td {
        width: fit-content;
    }
    tr {
        height: 2em;
        opacity: 1;
    }
    .date-label {
        text-align: right;
    }
    @media (min-width: 376px) {
        td:first-child,
        th:first-child {
            padding: 0 0 0 1em;
        }
        td:last-child,
        th:last-child {
            padding: 0 1em 0 0;
        }
    }
`;
