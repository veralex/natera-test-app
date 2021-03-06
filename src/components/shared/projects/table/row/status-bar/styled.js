import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 12.5em;
    height: 0.5em;
    border-radius: 0.25em;
    background-color: ${props => props.theme.lightGray};
`;

export const Bar = styled(Wrapper)`
    position: absolute;
    width: ${props => (props.status / 100) * 12.5}em;
    background-color: ${props => props.theme.default};
`;
