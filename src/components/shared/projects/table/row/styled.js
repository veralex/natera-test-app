import styled from 'styled-components';

export const TableRow = styled.tr`
    border-top: 1px solid ${props => props.theme.lightGray};
    height: 2em;
    td span {
        font-size: 0.75em;
        font-family: 'Roboto';
    }
    .date-table-cell {
        text-align: end;
    }
`;

export const RemoveButtonCell = styled.td`
    text-align: center;
    vertical-align: bottom;
    div {
        color: ${props => props.theme.darkRed};
        font-size: 1.5em;
        :hover {
            cursor: pointer;
        }
    }
`;
