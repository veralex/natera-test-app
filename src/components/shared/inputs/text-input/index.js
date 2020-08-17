import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../wrapper';

const TextInput = ({ name, label, value, onChange = () => {}, children }) => {
    const inputProps = {
        name,
        value,
        onChange,
    };
    return (
        <Wrapper label={label}>
            {children ? (
                React.cloneElement(children, {
                    ...children.props,
                    ...inputProps,
                })
            ) : (
                <input type="text" {...inputProps} />
            )}
        </Wrapper>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    children: PropTypes.element,
};

export { TextInput };
