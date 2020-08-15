import React from 'react';
import { Row } from './row';
import { Label } from '../../';

export const Table = ({ projects, edit }) => {
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
                        <Row key={project.id} project={project} edit={edit} />
                    ))}
            </tbody>
        </Table>
    );
};
