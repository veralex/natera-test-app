import React, { useContext } from 'react';
import { TopGrid } from './top-grid';
import { Highlights } from './highlights';
import { Projects } from 'components/shared/projects';
import { Notifications } from 'components/shared/notifications';
import { AppContext } from 'components/context';

const Dashboard = () => {
    const { statistics, posts, projects, notifications } = useContext(
        AppContext
    );
    return (
        <>
            <TopGrid data={statistics} />
            <Highlights data={posts} />
            <Notifications data={notifications} />
            <Projects data={projects} />
        </>
    );
};

const Memoized = React.memo(Dashboard);

export { Memoized as Dashboard };
