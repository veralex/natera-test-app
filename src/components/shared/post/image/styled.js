import styled from 'styled-components';

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 14em;
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
