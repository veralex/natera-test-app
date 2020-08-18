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
    disabled = false,
}) =>
    React.cloneElement(
        variant === 'filled' ? <DefaultButton /> : <OutlinedButton />,
        { onClick, size, color, disabled, className },
        <span className="btn-label">{children}</span>
    );

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'standard', 'large']),
    variant: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.oneOf(['default', 'red']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

const Memoized = React.memo(Button);

export { Memoized as Button };
