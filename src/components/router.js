import React, { isValidElement } from 'react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router, Route, NavLink, Switch } from 'react-router-dom';

const StyledMenu = styled.ul`
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

const AppRouter = props => {
    const { children } = props;
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <nav>
                <StyledMenu >
                    {React.Children.map(children, child =>
                        isValidElement(child) ? (
                            <li key={child.props.resource}>
                                <NavLink
                                    to={`/${child.props.resource}`}
                                    className='nav-link'
                                    activeClassName='nav-link-active'
                                    exact
                                >
                                    {child.props.label}
                                </NavLink>
                            </li>
                        ) : null
                    )}
                </StyledMenu>
            </nav>
            <Switch>
                {React.Children.map(children, child =>
                    isValidElement(child) ? (
                        <Route path={`/${child.props.resource}`} exact>
                            {child}
                        </Route>
                    ) : null
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
