import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 7.5em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        font-family: 'Roboto';
        font-size: 14px;
        color: ${props => props.theme.sectionLabel};
    }
    @media (max-width: 375px) {
        height: 2em;
    }
`;
