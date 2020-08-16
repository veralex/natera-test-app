import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 4em;
    padding: 0 1em;
    position: relative;
`;

export const Content = styled.h1`
    font-style: normal;
    font-weight: bold;
    position: absolute;
    bottom: 1em;
    color: ${props => props.theme.sectionLabel};
`;
