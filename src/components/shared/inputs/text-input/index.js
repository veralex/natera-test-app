import React from 'react';
import { Wrapper } from '../wrapper';

const TextInput = ({ name, label, value, onChange = e => {}, children }) => {
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

export { TextInput };
