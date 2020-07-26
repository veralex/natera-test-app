import React from 'react';
import PropTypes from 'prop-types';
import { TopGrid, Highlights } from '.';

const Layout = props => (
    <>
        <TopGrid />
        <Highlights />
    </>
);

Layout.propTypes = {
    resource: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

Layout.defaultProps = {
    resource: '',
    componentName: 'dashboard',
    label: 'Dashboard mode',
};

export default Layout;
