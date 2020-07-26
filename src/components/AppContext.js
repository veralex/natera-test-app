import React, { createContext, useState } from 'react';
import { posts, projects } from './context';
import json from '../assets/data.json';

const defaultContext = {
    users: json.users,
    projects: [],
};

const AppContext = createContext(defaultContext);

const AppProvider = props => {
    const { children } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const value = {
        ...defaultContext,
        ...posts(),
        ...projects(),
        modalOpen,
        setModalOpen,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
