import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const {isLoggedIn, path, component} = props;
    return (
        isLoggedIn ?
        <Route path={path}>
            {component}
        </Route>
        : <Route>
            <Redirect to="/"/>
        </Route>
    );
};

export default PrivateRoute;