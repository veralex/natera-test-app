import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButton, OutlinedButton } from './styled';

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

// Button.defaultProps = {
//     variant: 'filled',
//     color: 'default',
// };

export { Button };