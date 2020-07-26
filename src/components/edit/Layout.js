import React from 'react';
import PropTypes from 'prop-types';
import { Highlights } from '.';

const Layout = props => (
    <>
        <Highlights />
    </>
);

Layout.propTypes = {
    resource: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

Layout.defaultProps = {
    resource: 'edit',
    componentNme: 'edit',
    label: 'Edit mode',
};

export default Layout;
