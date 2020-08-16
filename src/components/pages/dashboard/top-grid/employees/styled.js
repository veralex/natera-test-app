import styled from 'styled-components';
import { Icon as BaseIcon } from '../shared/styled';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1em;
    @media (max-width: 375px) {
        margin: 0;
    }
`;

export const TopGrid = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;

export const Icon = styled(BaseIcon)`
    margin: 0 0.25em 0 -0.1em;
`;

export const Divider = styled.div`
    margin: 2em 0 1em;
    flex-grow: 2;
    hr {
        width: 100%;
        border: 1px solid ${props => props.theme.lightGray};
    }
`;
