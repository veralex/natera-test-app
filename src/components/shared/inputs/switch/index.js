import React from 'react';
import PropTypes from 'prop-types';
import ReactSwitch from 'react-switch';
import { Wrapper, Label } from './styled';

const Switch = ({ label, value, onChange = () => {} }) => {
    return (
        <Wrapper>
            <ReactSwitch
                checked={value}
                onChange={onChange}
                uncheckedIcon={false}
                checkedIcon={false}
                height={22}
                width={44}
                onColor="#6883E4"
                handleDiameter={18}
            />
            {label && <Label>{label}</Label>}
        </Wrapper>
    );
};

Switch.propTypes = {
    label: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
};

export { Switch };
