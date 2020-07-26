import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
        right: 0px;
        bottom: 0px;
        height: 30px;
        width: 112px;
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
            font-size: 14px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: ${props => props.theme.label};
        }
    }
`;

const FileInput = ({ value, name, onChange = () => {} }) => {
    return (
        <Wrapper>
            <input readOnly={true} type="text" value={value?.name}></input>
            <label htmlFor="file-upload" className="file-upload-label">
                <div>Upload</div>
            </label>
            <input
                name={name}
                id="file-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={e => {
                    if (e.target.files.length) {
                        onChange(e.target.files[0]);
                    }
                }}
            />
        </Wrapper>
    );
};

export { FileInput };
