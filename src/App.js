import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, AppProvider } from './components';
import { Modal, Footer } from './components/shared';
import theme from './theme';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <Router />
                <Modal />
                <Footer>Hosta LLC 2015–2020. Made by @veralex</Footer>
            </AppProvider>
        </ThemeProvider>
    );
};
