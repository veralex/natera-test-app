import styled, { keyframes } from 'styled-components';
import { Tile } from 'components/shared';
import { BaseGrid } from 'components/shared/layout/styled';

const fade = keyframes`
{
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
`;

export const Wrapper = styled.div`
    .ReactCollapse--collapse {
        transition: height 200ms;
    }

    .notification-fading {
        animation: ${fade} 200ms;
    }
`;

export const Grid = styled(BaseGrid)`
    grid-gap: 0.25em;
    @media (max-width: 375px) {
        margin: 0em 1em;
    }
`;

export const GridRow = styled.div`
    margin: 1em 0 0 0;
`;

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
