import styled, { keyframes } from 'styled-components';
import { Tile } from 'components/shared';
import { BaseGrid } from 'components/shared/layout/styled';

export const Wrapper = styled.div`
    margin: 1em 0 0 0;
`;

export const Grid = styled(BaseGrid)``;

const fade = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
`;

export const NotificationTile = styled(Tile)`
    background-color: ${props => props.theme.default};
    height: auto;

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
    .notification-fading {
        animation: 0.2s ${fade};
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
