import styled from 'styled-components';

export const ItemWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    flex: 1;
`;

export const Billions = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    color: #484848;
`;

export const UsdIcon = styled.span`
    font-size: 37px;
    color: ${props => props.theme.default};
`;
