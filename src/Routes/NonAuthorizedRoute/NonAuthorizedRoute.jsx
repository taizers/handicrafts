import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NonAuthorizedRoute = ({ children, signedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return signedIn !== true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default NonAuthorizedRoute;