import styled from 'styled-components';

export const DefaultButton = styled.button`
    width: ${props => (props.size === 'small' ? '100%' : '11em')};
    background: ${props => props.theme[props.color]};
    border: ${props => `1px solid ${props.theme[props.color]}`};
    border-radius: ${props => (props.size === 'small' ? '3px' : '5px')};
    height: ${props => {
        switch (props.size) {
            case 'small':
                return '1.5em';
            case 'large':
                return '2.4em';
            default:
                return '1.8em';
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
        font-size: 0.875em;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${props => props.theme.text};
    }
`;

export const OutlinedButton = styled(DefaultButton)`
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
