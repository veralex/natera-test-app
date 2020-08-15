import React from 'react';
import { RemoveButton } from './remove-button';
import { StatusBar } from './status-bar';
import { TableRow, RemoveButtonCell } from './styled';
import './index.css';

export const Row = ({ project, edit = false }) => {
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
            <td>
                <span>{project.company}</span>
            </td>
            <td>
                <span>{project.status}%</span>
            </td>
            <td>
                <StatusBar status={project.status} />
            </td>
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
