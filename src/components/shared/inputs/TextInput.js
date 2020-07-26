import React from 'react';
import { InputWrapper } from '..';

const TextInput = ({ name, label, value, onChange = e => {}, children }) => {
    const inputProps = {
        name,
        value,
        onChange,
    };
    return (
        <InputWrapper label={label}>
            {children ? (
                React.cloneElement(children, {
                    ...children.props,
                    ...inputProps,
                })
            ) : (
                <input type="text" {...inputProps} />
            )}
        </InputWrapper>
    );
};

export { TextInput };
