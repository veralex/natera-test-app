import React, { useContext } from 'react';
import { projectType } from 'components/types';
import PropTypes from 'prop-types';
import { AppContext } from 'components/context';

const RemoveButton = ({ project, onClickHandler }) => {
    const { removeProject } = useContext(AppContext);

    return (
        <div
            className="material-icons"
            onClick={e => onClickHandler(e, () => removeProject(project.id))}
        >
            close
        </div>
    );
};

RemoveButton.propTypes = {
    project: projectType,
    onClickHandler: PropTypes.func,
};

export { RemoveButton };
