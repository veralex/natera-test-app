import React from 'react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from 'react-router-dom';
import RouterCarousel from 'react-router-carousel';
import Dashboard from './dashboard';
import Edit from './edit';

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin-top: 48px;
    .nav-link {
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        line-height: 24px;
        padding-bottom: 6p;
        color: rgba(255, 255, 255, 0.5);
        border-bottom: none;
        text-decoration: none;
    }
    .nav-link-active {
        color: #ffffff;
        border-bottom: 3px solid #ffffff;
    }
`;

const Carousel = () => {
    return (
        <RouterCarousel
            swipeLeftClassName={
                'router-carousel-zone router-carousel-zone--left'
            }
            swipeRightClassName={
                'router-carousel-zone router-carousel-zone--right'
            }
            // sliderMode={true}
            fallbackRoute={<div>No content</div>}
        >
            <Route path="/" component={Dashboard} />
            <Route path="/edit" component={Edit} />
        </RouterCarousel>
    );
};

export const AppRouter = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <StyledMenu>
                <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/edit"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact
                >
                    Edit
                </NavLink>
            </StyledMenu>
            <Switch>
                <Route path="*" component={Carousel} />
            </Switch>
        </Router>
    );
};
