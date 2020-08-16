import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    height: 2.25em;
    width: 2.25empx;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4,
    span {
        margin: 0 0 0 12px;
        font-style: normal;
        font-weight: 500;
    }
    h4 {
        color: ${props => props.theme.black};
        line-height: 16px;
        font-size: 14px;
    }
    span {
        color: ${props => props.theme.gray};
        font-size: 11px;
        line-height: 12px;
        letter-spacing: 0.01em;
    }
`;
