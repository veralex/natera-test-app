import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 42px;
    margin: 0 2px;
    padding: 0.25em 1em;
    background: rgba(104, 131, 228, 0.2);
    transition: background 0.2s ease;
    :hover {
        background: rgba(104, 131, 228, 0.5);
        cursor: pointer;
    }
    span {
        align-self: center;
        font-family: 'Roboto';
        font-size: 0.75em;
        line-height: 1em;
        vertical-align: center;
        color: ${props => props.theme.inputText};
    }
`;
