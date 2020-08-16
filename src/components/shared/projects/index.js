import React, { useContext } from 'react';
import { SectionHeader } from '..';
import { Table } from './table';
import { AppContext } from 'components/context';
import { TableTile } from './styled';

export const Projects = ({ edit }) => {
    const { projects } = useContext(AppContext);

    return (
        <>
            <SectionHeader>Projects</SectionHeader>
            <TableTile>
                <Table projects={projects} edit={edit} />
            </TableTile>
        </>
    );
};
