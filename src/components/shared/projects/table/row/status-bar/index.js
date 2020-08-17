import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Bar } from './styled';

const StatusBar = ({ status }) => (
    <Wrapper>
        <Bar status={status} />
    </Wrapper>
);

StatusBar.propTypes = {
    status: PropTypes.number.isRequired,
};

export { StatusBar };
