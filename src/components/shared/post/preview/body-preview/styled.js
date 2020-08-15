import styled from 'styled-components';

export const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    padding: 8px 16px 8px 30px;
    h3 {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${props => props.theme.inputText};
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img});
    background-position: top center;
    background-size: cover;
    img {
        max-width: 100%;
    }
    h3 {
        position: absolute;
        left: 24px;
        bottom: 16px;
        color: ${props => props.theme.text};
    }
`;
