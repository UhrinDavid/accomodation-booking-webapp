import { admin } from 'components/globalFuncs';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = (props) => {
    const {isLoggedIn ,path, component} = props;
    return (
       isLoggedIn && admin() ?
        <Route path={path}>
            {component}
        </Route>
        : <Route>
            <Redirect to="/"/>
        </Route>
    );
};

export default AdminRoute;