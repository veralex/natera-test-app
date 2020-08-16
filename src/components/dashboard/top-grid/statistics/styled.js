import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

export const Column = styled.div`
    width: 100%;
    position: relative;
`;

export const LinkRow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    i {
        color: ${props => props.theme.default};
        font-size: 1.5em;
    }
    a,
    i {
        :hover {
            cursor: pointer;
        }
    }
`;

// Here goes a link because wrapper doesn't require href prop
export const Link = styled.a`
    color: ${props => props.theme.default};
    font-size: 14px;
    font-family: Roboto;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
`;
