import React, { createContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducer';
import { postActions, projectActions, notificationActions } from './actions';
import json from 'assets/data.json';

const defaultContext = {
    users: json.users,
    statistics: json.statistics,
    notifications: json.notifications,
};

export const AppContext = createContext(defaultContext);

const AppProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const [posts, dispatchPosts] = useReducer(reducer, json.posts);
    const [projects, dispatchProjects] = useReducer(reducer, json.projects);
    const [notifications, dispatchNotifications] = useReducer(
        reducer,
        json.notifications
    );

    // Very linear state
    const value = {
        ...defaultContext,
        posts,
        ...postActions(dispatchPosts),
        projects,
        ...projectActions(dispatchProjects),
        notifications,
        ...notificationActions(dispatchNotifications),
        modalOpen,
        setModalOpen,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppProvider };
