import React, { createContext, useState, useReducer } from 'react';
import { reducer } from './reducer';
// import { Posts } from './posts';
// import { Projects } from './projects';
import { postActions, projectActions, notificationActions } from './actions';
import json from 'assets/data.json';

const defaultContext = {
    users: json.users,
    statistics: json.statistics,
    notifications: json.notifications,
};

export const AppContext = createContext(defaultContext);

export const AppProvider = props => {
    const { children } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(true);

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
        showNotification,
        setShowNotification,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
