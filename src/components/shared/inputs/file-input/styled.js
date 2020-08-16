import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    input[type='file'] {
        display: none;
    }
    .file-upload-label {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        bottom: 0;
        height: 2.05em;
        width: 7em;
        background: ${props => props.theme.lightGray};
        border-radius: 3px;
        border: none;
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
        }
        & div {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 0.875em;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: ${props => props.theme.label};
        }
    }
`;
