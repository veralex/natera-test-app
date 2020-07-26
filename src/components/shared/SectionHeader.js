import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 64px;
    padding: 0px 16px;
    position: relative;
`;
const Text = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    bottom: 16px;
    color: ${props => props.theme.sectionLabel};
`;

const SectionHeader = ({ children, className }) => (
    <Header className={className}>
        <Text>{children}</Text>
    </Header>
);

export { SectionHeader };
