import React, { useContext } from 'react';
import { SectionHeader } from '..';
import { Table } from './table';
import { AppContext } from 'components/context';
import { TableTile, Grid } from './styled';

export const Projects = ({ edit }) => {
    const { projects } = useContext(AppContext);

    return (
        <>
            <SectionHeader>Projects</SectionHeader>
            <Grid>
                <TableTile>
                    <Table projects={projects} edit={edit} />
                </TableTile>
            </Grid>
        </>
    );
};
