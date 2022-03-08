import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = ({ children, signedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return signedIn === true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default AuthorizedRoute;
