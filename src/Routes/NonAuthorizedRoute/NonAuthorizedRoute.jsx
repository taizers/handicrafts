import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NonAuthorizedRoute = ({ signedIn, component, path, exact }) => {

    return !signedIn ? <Route path={path} component={component} exact={exact} /> : (
        <Redirect to="/" />
      );
  ;

};

export default NonAuthorizedRoute;