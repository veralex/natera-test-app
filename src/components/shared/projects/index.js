import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SectionHeader } from '..';
import { Table } from './table';
import { AppContext } from 'components/context';
import { TableTile, Grid } from './styled';

const Projects = ({ edit }) => {
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

Projects.propTypes = {
    edit: PropTypes.bool,
};

export { Projects };
