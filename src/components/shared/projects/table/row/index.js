import React from 'react';
import PropTypes from 'prop-types';
import { projectType } from 'components/types';
import { useMediaQuery } from 'react-responsive';
import { RemoveButton } from './remove-button';
import { StatusBar } from './status-bar';
import { TableRow, RemoveButtonCell } from './styled';
import './index.css';

const Row = ({ project, edit = false }) => {
    const isLarge = !useMediaQuery({ maxWidth: '375px' });

    const onProjectDelete = (e, callback) => {
        const tr = e.currentTarget.closest('tr');
        tr.classList.add('table-row-fading');
        setTimeout(callback, 200);
    };

    return (
        <TableRow>
            <td>
                <span>{project.name}</span>
            </td>
            {isLarge && (
                <td>
                    <span>{project.company}</span>
                </td>
            )}
            <td>
                <span>{project.status}%</span>
            </td>
            {isLarge && (
                <td className="status-bar-cell">
                    <StatusBar status={project.status} />
                </td>
            )}
            <td className="date-table-cell">
                <span>{project.release_date}</span>
            </td>
            {edit && (
                <RemoveButtonCell>
                    <RemoveButton
                        project={project}
                        onClickHandler={onProjectDelete}
                    />
                </RemoveButtonCell>
            )}
        </TableRow>
    );
};

Row.propTypes = {
    project: projectType,
    edit: PropTypes.bool,
};

export { Row };
