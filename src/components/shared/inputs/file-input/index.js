import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

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

FileInput.propTypes = {
    value: PropTypes.any,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

const Memoized = React.memo(FileInput);

export { Memoized as FileInput };
