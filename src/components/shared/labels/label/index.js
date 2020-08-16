import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled';

const Label = ({ className, children, ...rest }) => (
    <StyledLabel className={className} {...rest}>
        {children}
    </StyledLabel>
);

Label.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
};

export { Label };
