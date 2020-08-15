import React, { useContext } from 'react';
import { AppContext } from '../../../../../';

export const RemoveButton = ({ project, onClickHandler }) => {
    const { removeProject } = useContext(AppContext);

    return (
        <div
            className="material-icons"
            onClick={e => {
                console.log(e);
                onClickHandler(e, () => removeProject(project.id));
            }}
        >
            close
        </div>
    );
};
