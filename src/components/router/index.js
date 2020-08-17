import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { createBrowserHistory } from 'history';
import { Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import RouterCarousel from 'react-router-carousel';
import { Dashboard } from 'components/pages/dashboard';
import { Edit } from 'components/pages/edit';
import { Menu } from './styled';

const history = createBrowserHistory();

const Carousel = ({ isDesktop }) => {
    return (
        <RouterCarousel>
            <Route path="/" component={Dashboard} />
            <Route path="/edit">
                {isDesktop ? <Edit /> : <Redirect to="/" />}
            </Route>
        </RouterCarousel>
    );
};

Carousel.propTypes = {
    isDesktop: PropTypes.bool.isRequired,
};

const AppRouter = () => {
    const isDesktop = !useMediaQuery({ maxWidth: '375px' });

    return (
        <Router history={history}>
            <Menu>
                <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact
                >
                    Dashboard mode
                </NavLink>

                {isDesktop && (
                    <NavLink
                        to="/edit"
                        className="nav-link"
                        activeClassName="nav-link-active"
                        exact
                    >
                        Edit mode
                    </NavLink>
                )}
            </Menu>
            <Switch>
                <Route
                    path="*"
                    component={() => <Carousel isDesktop={isDesktop} />}
                />
            </Switch>
        </Router>
    );
};

export { AppRouter as Router };
