import styled from 'styled-components';
import { ModalContentWrapper, ModalFooter } from '../styled';

export const Text = styled.div`
    overflow: auto;
    max-height: ${props => props.maxHeight};
    margin: 1.5em 0em;
    p {
        font-size: 14px;
        line-height: 20px;
    }
`;

export const BodyWrapper = styled(ModalContentWrapper)`
    height: auto;
`;

export const Footer = styled(ModalFooter)`
    justify-content: center;
`;

export const Author = styled.div`
    position: absolute;
    bottom: 6em;
`;

export const Title = styled.h1`
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
`;
