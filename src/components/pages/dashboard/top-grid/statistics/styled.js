import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ColumnWrapper = styled.div`
    display: flex;
    height: 100%;
    @media (max-width: 375px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    width: 100%;
    /* position: relative; */
`;

export const LinkRow = styled.div`
    display: flex;
    align-items: center;
    i {
        color: ${props => props.theme.default};
        font-size: 1.5em;
        :hover {
            cursor: pointer;
        }
    }
`;

export const Chart = styled.img`
    @media (max-width: 375px) {
        width: 100%;
        margin: 1em 0;
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
    :hover {
        cursor: pointer;
    }
`;
