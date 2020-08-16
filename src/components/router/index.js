import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import RouterCarousel from 'react-router-carousel';
import { Dashboard } from '../dashboard';
import { Edit } from '../edit';
import { Menu } from './styled';

const Carousel = () => {
    return (
        <RouterCarousel
            swipeLeftClassName={
                'router-carousel-zone router-carousel-zone--left'
            }
            swipeRightClassName={
                'router-carousel-zone router-carousel-zone--right'
            }
            fallbackRoute={<div>No content</div>}
        >
            <Route path="/" component={Dashboard} />
            <Route path="/edit" component={Edit} />
        </RouterCarousel>
    );
};

const AppRouter = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Menu>
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
            </Menu>
            <Switch>
                <Route path="*" component={Carousel} />
            </Switch>
        </Router>
    );
};

export { AppRouter as Router };
