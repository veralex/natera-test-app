import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

const Footer = ({ children }) => (
    <Wrapper>
        <span>{children}</span>
    </Wrapper>
);

Footer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { Footer };
