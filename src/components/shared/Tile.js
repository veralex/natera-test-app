import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TileWrapper = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 100%;
    height: 190px
`;

const Tile = props => {
    const { children, className } = props;
    return <TileWrapper className={className}>{children}</TileWrapper>;
};

Tile.propTypes = {
    className: PropTypes.string,
};

export { Tile };
