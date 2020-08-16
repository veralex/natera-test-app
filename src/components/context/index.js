import React, { createContext, useState } from 'react';
import { Posts } from './posts';
import { Projects } from './projects';
import json from '../../assets/data.json';

const defaultContext = {
    users: json.users,
    statistics: json.statistics,
    // projects: json.projects,
};

export const AppContext = createContext(defaultContext);

export const AppProvider = props => {
    const { children } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const value = {
        ...defaultContext,
        ...Posts(),
        ...Projects(),
        modalOpen,
        setModalOpen,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
