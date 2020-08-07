import React, { useContext } from 'react';
import styled from 'styled-components';
import { SectionHeader, Tile } from '..';
import { ProjectsTable } from '..';
import { AppContext } from '../..';

const TableTile = styled(Tile)`
    height: fit-content;
    padding: 1.5em;
`;

const Projects = props => {
    const { projects } = useContext(AppContext);

    return (
        <>
            <SectionHeader>Projects</SectionHeader>
            <TableTile>
                <ProjectsTable projects={projects} />
            </TableTile>
        </>
    );
};
export { Projects };
