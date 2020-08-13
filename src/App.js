import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, AppProvider } from './components';
import Edit from './components/edit/Layout';
import Dashboard from './components/dashboard/Layout';
import { Modal } from './components/shared';
import theme from './theme';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <Router>
                    <Dashboard />
                    <Edit />
                </Router>
                <Modal />
            </AppProvider>
        </ThemeProvider>
    );
};
