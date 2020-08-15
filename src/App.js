import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, AppProvider } from './components';
import { Modal } from './components/shared';
import theme from './theme';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <Router />
                <Modal />
            </AppProvider>
        </ThemeProvider>
    );
};
