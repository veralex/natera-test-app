import React from 'react';
import styled from 'styled-components';
import { ProjectsTableRow } from '.';
import { Label } from '..';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th {
        text-align: left;
    }
    tr {
        height: 2em;
    }
    td,
    th {
        padding: 0 1em;
    }
`;

const ProjectsTable = ({ projects }) => {
    return (
        <Table>
            <tr>
                <th>
                    <Label>Project</Label>
                </th>
                <th>
                    <Label>Company</Label>
                </th>
                <th>
                    <Label>Status</Label>
                </th>
                <th></th>
                <th>
                    <Label>Release date</Label>
                </th>
            </tr>
            {projects &&
                projects.map(project => (
                    <ProjectsTableRow key={project.id} project={project} />
                ))}
        </Table>
    );
};

export { ProjectsTable };
