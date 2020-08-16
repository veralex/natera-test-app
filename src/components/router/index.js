import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import RouterCarousel from 'react-router-carousel';
import { Dashboard } from 'components/pages/dashboard';
import { Edit } from 'components/pages/edit';
import { Menu } from './styled';

const Carousel = () => {
    return (
        <RouterCarousel>
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
