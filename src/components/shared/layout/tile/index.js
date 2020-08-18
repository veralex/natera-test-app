import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

const Tile = ({ children, className, height }) => {
    return (
        <Wrapper className={className} height={height}>
            {children}
        </Wrapper>
    );
};

Tile.propTypes = {
    className: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.element,
};

export { Tile };
