import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styled';

const SectionHeader = ({ children, className }) => (
    <Wrapper className={className}>
        <Content>{children}</Content>
    </Wrapper>
);

SectionHeader.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export { SectionHeader };
