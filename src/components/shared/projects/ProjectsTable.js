import React from 'react';
import styled from 'styled-components';
import { ProjectsTableRow } from '.';
import { Label } from '..';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    /* table-layout: fixed; */
    th {
        text-align: left;
    }
    th,
    td {
        width: fit-content;
    }
    tr {
        height: 2em;
        opacity: 1;
    }
    td:first-child,
    th:first-child {
        padding: 0 0 0 1em;
    }
    td:last-child,
    th:last-child {
        padding: 0 1em 0 0;
    }
    .date-label {
        text-align: right;
    }
`;

const ProjectsTable = ({ projects, edit }) => {
    return (
        <Table>
            <thead>
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
                        <Label className="date-label">Release date</Label>
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {projects &&
                    projects.map(project => (
                        <ProjectsTableRow
                            key={project.id}
                            project={project}
                            edit={edit}
                        />
                    ))}
            </tbody>
        </Table>
    );
};

export { ProjectsTable };
