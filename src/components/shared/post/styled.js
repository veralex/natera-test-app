import styled from 'styled-components';

export const ModalFooter = styled.div`
    position: absolute;
    bottom: 0px;
    height: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalContentWrapper = styled.div`
    height: 100%;
    padding: 1.5em 3.5em 0;
    @media (max-width: 375px) {
        padding: 1.5em 1.5em 0;
    }
`;
