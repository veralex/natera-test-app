import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.label};
`;

const Label = ({ className, children, ...rest }) => (
    <StyledLabel className={className} {...rest}>
        {children}
    </StyledLabel>
);

export { Label };
