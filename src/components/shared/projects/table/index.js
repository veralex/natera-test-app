import React from 'react';
import PropTypes from 'prop-types';
import { projectType } from 'components/types';
import { useMediaQuery } from 'react-responsive';
import { Row } from './row';
import { Label } from 'components/shared';
import { StyledTable } from './styled';

const Table = ({ projects, edit }) => {
    const isLarge = !useMediaQuery({ maxWidth: '375px' });

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>
                        <Label>Project</Label>
                    </th>
                    {isLarge && (
                        <th>
                            <Label>Company</Label>
                        </th>
                    )}
                    <th>
                        <Label>Status</Label>
                    </th>
                    {isLarge && <th></th>}
                    <th>
                        <Label className="date-label">Release date</Label>
                    </th>
                    {edit && <th />}
                </tr>
            </thead>
            <tbody>
                {projects &&
                    projects.map(project => (
                        <Row key={project.id} project={project} edit={edit} />
                    ))}
            </tbody>
        </StyledTable>
    );
};

Table.propTypes = {
    projects: PropTypes.arrayOf(projectType),
    edit: PropTypes.bool,
};

export { Table };
