import styled from 'styled-components';

export const ColoredText = styled.div`
    span,
    code {
        font-size: 0.75em;
        font-family: 'Roboto';
        line-height: 0.75em;
    }
    span {
        color: ${props => props.theme.label};
    }
    code {
        color: ${props => props.theme.default};
    }
`;

export const Row = styled.div`
    margin-top: 0.5em;
    display: flex;
    position: relative;
    align-items: center;
`;

export const BigText = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.fontSize ?? '2em'};
    color: ${props => props.theme.inputText};
`;

export const Icon = styled.i`
    font-size: ${props => props.fontSize ?? '2em'};
    color: ${props => props.theme.default};
    /* A crutch to align the icon */
    margin-left: -0.25em;
`;
