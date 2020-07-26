import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from '..';

const Wrapper = styled.div`
    input,
    textarea {
        width: 100%;
        margin-top: 8px;
        border: 1px solid ${props => props.theme.border};
        border-radius: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 12px;
        height: 30px;
        line-height: 14px;
        color: ${props => props.theme.inputText};
        &:focus {
            box-shadow: 0 0 0 1px ${props => props.theme.inputText};
            outline: none;
        }
    }
    .text-area-input {
        height: 120px;
        resize: none;
    }
    .text-input-label {
        margin-top: 24px;
    }
`;

const InputWrapper = ({ label, className, children }) => {
    return (
        <Wrapper>
            {label && (
                <Label className={`text-input-label ${className}`}>
                    {label}
                </Label>
            )}
            {children}
            {/* {React.cloneElement(children, {
                ...children.props,
                ...inputProps,
            })} */}
        </Wrapper>
    );
};

InputWrapper.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element,
};

export { InputWrapper };
