import React from 'react';
import styled from 'styled-components';
import ReactSwitch from 'react-switch';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Label = styled.span`
    font-family: h4;
    font-size: 14px;
    margin-left: 20px;
    color: ${props => props.theme.inputText};
`;

const Switch = ({ name, label, value, onChange = e => {} }) => {
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

export { Switch };
