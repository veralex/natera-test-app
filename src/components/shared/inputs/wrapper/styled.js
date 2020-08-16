import styled from 'styled-components';

export const Wrapper = styled.div`
    input,
    textarea {
        width: 100%;
        margin-top: 0.75em;
        border: 1px solid ${props => props.theme.border};
        border-radius: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 0.75em;
        height: 2.75em;
        line-height: 0.875em;
        color: ${props => props.theme.inputText};
        &:focus {
            box-shadow: 0 0 0 1px ${props => props.theme.inputText};
            outline: none;
        }
    }
    .text-area-input {
        height: 7.5em;
        resize: none;
    }
    .text-input-label {
        margin-top: 1.5em;
    }
`;
