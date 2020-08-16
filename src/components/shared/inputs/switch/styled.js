import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Label = styled.h4`
    font-size: 0.875em;
    font-weight: 400;
    margin-left: 1.5em;
    color: ${props => props.theme.inputText};
`;
