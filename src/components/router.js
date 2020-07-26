import React, { isValidElement } from 'react';
import { createBrowserHistory } from 'history';
import { makeStyles } from '@material-ui/styles';
import { Router, Route, NavLink, Switch } from 'react-router-dom';

const useStyles = makeStyles(
    {
        menu: {
            display: 'flex',
            justifyContent: 'space-between',
            listStyleType: 'none',
            padding: '0px',
            marginTop: '48px',
        },
        link: {
            fontSize: '20px',
            fontWeight: 'bold',
            fontStyle: 'normal',
            lineHeight: '24px',
            paddingBottom: '6px',
            color: 'rgba(255, 255, 255, 0.5)',
            borderBottom: 'none',
            textDecoration: 'none',
        },
        activeLink: {
            color: '#FFFFFF',
            borderBottom: '3px solid #FFFFFF',
        },
    },
    { name: 'HTMenu' }
);

const AppRouter = props => {
    const { children } = props;
    const history = createBrowserHistory();
    const classes = useStyles();

    return (
        <Router history={history}>
            <nav>
                <ul className={classes.menu}>
                    {React.Children.map(children, child =>
                        isValidElement(child) ? (
                            <li key={child.props.resource}>
                                <NavLink
                                    to={`/${child.props.resource}`}
                                    className={classes.link}
                                    activeClassName={classes.activeLink}
                                    exact
                                >
                                    {child.props.label}
                                </NavLink>
                            </li>
                        ) : null
                    )}
                </ul>
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
