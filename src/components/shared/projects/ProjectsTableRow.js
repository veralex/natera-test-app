import React from 'react';
import styled from 'styled-components';
import { ProjectsStatusBar, RemoveProjectButton } from '.';
import './table-row.css';

const Row = styled.tr`
    border-top: 1px solid ${props => props.theme.lightGray};
    height: 2em;
    td span {
        font-size: 0.75em;
        font-family: 'Roboto';
    }
    .date-table-cell {
        text-align: end;
    }
`;

const DeleteButtonCell = styled.td`
    text-align: center;
    vertical-align: bottom;
    div {
        color: ${props => props.theme.darkRed};
        font-size: 1.5em;
        :hover {
            cursor: pointer;
        }
    }
`;

const ProjectsTableRow = ({ project, edit = false }) => {
    const onProjectDelete = (e, callback) => {
        const tr = e.currentTarget.closest('tr');
        tr.classList.add('table-row-fading');
        setTimeout(callback, 200);
    };

    return (
        <Row>
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
                <ProjectsStatusBar status={project.status} />
            </td>
            <td className="date-table-cell">
                <span>{project.release_date}</span>
            </td>
            {edit && (
                <DeleteButtonCell>
                    <RemoveProjectButton
                        project={project}
                        onClickHandler={onProjectDelete}
                    />
                </DeleteButtonCell>
            )}
        </Row>
    );
};

export { ProjectsTableRow };
