import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

const Chip = ({ children }) => (
    <Wrapper>
        <span>{children}</span>
    </Wrapper>
);

Chip.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Memoized = React.memo(Chip);

export { Memoized as Chip };
