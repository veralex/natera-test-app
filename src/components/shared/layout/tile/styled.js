import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 100%;
    height: ${props => props.height ?? '12em'};
`;
