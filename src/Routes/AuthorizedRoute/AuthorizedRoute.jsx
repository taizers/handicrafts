import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = ({ signedIn, component, path, exact }) => {

    return signedIn ? <Route path={path} component={component} exact={exact} /> : <Redirect to="/signin" />;

};

export default AuthorizedRoute;
