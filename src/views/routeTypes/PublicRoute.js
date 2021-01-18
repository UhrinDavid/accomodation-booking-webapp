import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (props) => {
    const {restricted, path, component, isLoggedIn} = props;
    return (
        restricted && isLoggedIn ?
        <Route>
            <Redirect to="/"/>
        </Route>
        : 
        <Route path={path}>
            {component}
        </Route>
    );
};

export default PublicRoute;