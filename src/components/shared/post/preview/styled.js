import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    & hr {
        width: 100%;
        border: 1px solid ${props => props.theme.lightGray};
        z-index: 1;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .post-header {
        flex: 0 0 36px;
        padding: 0px 12px;
    }
    .post-divider {
        position: absolute;
        width: 100%;
        height: 1px;
    }
    .header-divider {
        top: 36px;
    }
    .footer-divider {
        bottom: 56px;
        padding: 0px 24px;
    }

    .post-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .post-footer {
        flex: 0 0 56px;
        padding: 0px 20px;
    }
    .create-post-button {
        margin: 0px 16px;
    }
`;

export const Icon = styled.div`
    color: #dadada;
    font-size: 42px;
`;

export const Label = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${props => props.theme.default};

    margin: 8px 0px 0px;
`;
