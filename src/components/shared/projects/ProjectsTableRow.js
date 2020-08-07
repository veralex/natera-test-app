import React from 'react';
import styled from 'styled-components';
import { ProjectsStatusBar } from '.';

const Row = styled.tr`
    border-top: 1px solid ${props => props.theme.lightGray};
    height: 2em;
    td span {
        font-size: 0.75em;
        font-family: 'Roboto';
    }
`;

const ProjectsTableRow = ({ project }) => (
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
        <td className="project-status-bar">
            <ProjectsStatusBar status={project.status} />
        </td>
        <td>
            <span>{project.release_date}</span>
        </td>
    </Row>
);

export { ProjectsTableRow };
