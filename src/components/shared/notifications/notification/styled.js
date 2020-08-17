import styled from 'styled-components';
import { Wrapper as Tile } from 'components/shared/layout/tile/styled';

export const NotificationTile = styled(Tile)`
    background-color: ${props => props.theme.default};
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 1em 1.25em;
    opacity: 1;
    p,
    i {
        color: ${props => props.theme.text};
    }
    @media (max-width: 375px) {
        padding: 1sem 1em;
    }
`;

export const NotificationContent = styled.div`
    flex-grow: 2;
    p {
        font-family: 'Montserrat';
        font-size: 20px;
        line-height: 24px;
        font-weight: bold;
        margin: 0.2em 0;
    }
    .notification-label-text {
        font-size: 14px;
        line-height: 17px;
        font-weight: normal;
    }
`;

export const RingbellIcon = styled.i`
    font-size: 3em;
    margin-right: 0.5em;
`;

export const CloseButton = styled.i`
    :hover {
        cursor: pointer;
    }
`;
