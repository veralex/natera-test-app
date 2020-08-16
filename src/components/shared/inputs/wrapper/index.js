import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/shared';
import { Wrapper } from './styled';

const InputWrapper = ({ label, className, children }) => {
    return (
        <Wrapper>
            {label && (
                <Label className={`text-input-label ${className}`}>
                    {label}
                </Label>
            )}
            {children}
        </Wrapper>
    );
};

InputWrapper.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element,
};

export { InputWrapper as Wrapper };
