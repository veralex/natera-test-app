import styled from 'styled-components';

export const ModalFooterDivider = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 4em;
    hr {
        width: 84%;
        border: 1px solid ${props => props.theme.lightGray};
    }
`;

export const ModalContent = styled.div`
    height: 100%;
`;
