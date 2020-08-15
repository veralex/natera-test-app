import styled from 'styled-components';

export const ModalFooterDivider = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 4em;
    padding: 0em 3.5em;
    hr {
        width: 100%;
        border: 1px solid ${props => props.theme.lightGray};
    }
`;

export const ModalContent = styled.div`
    height: 100%;
`;
