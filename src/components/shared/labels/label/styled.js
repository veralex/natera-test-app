import styled from 'styled-components';

export const StyledLabel = styled.label`
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 0.875em;
    line-height: 1.25em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.label};
`;
