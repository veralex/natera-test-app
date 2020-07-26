import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
    width: ${props => (props.size === 'small' ? '100%' : '148px')};
    background: ${props => props.theme[props.color]};
    border: ${props => `1px solid ${props.theme[props.color]}`};
    border-radius: ${props => (props.size === 'small' ? '3px' : '5px')};
    height: ${props => {
        switch (props.size) {
            case 'small':
                return '20px';
            case 'large':
                return '32px';
            default:
                return '24px';
        }
    }};
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
    .btn-label {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${props => props.theme.text};
    }
`;

const OutlinedButton = styled(DefaultButton)`
    background: ${props => props.theme.text};
    border: ${props => `1px solid ${props.theme[props.color]}`};
    transition: background 0.2s;
    &:hover {
        background: ${props => props.theme[props.color]};
        .btn-label {
            color: ${props => props.theme.text};
        }
    }
    .btn-label {
        color: ${props => props.theme[props.color]};
        transition: color 0.2s;
    }
`;

const Button = ({
    children,
    onClick,
    className,
    size = 'standard',
    variant = 'filled',
    color = 'default',
}) =>
    React.cloneElement(
        variant === 'filled' ? <DefaultButton /> : <OutlinedButton />,
        { onClick, size, color, className },
        <span className="btn-label">{children}</span>
    );

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'standard', 'large']),
    variant: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.oneOf(['default', 'red']),
    className: PropTypes.string,
};

Button.defaultProps = {
    variant: 'filled',
    color: 'default',
};

export { Button };
