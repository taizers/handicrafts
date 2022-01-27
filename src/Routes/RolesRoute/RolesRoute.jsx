import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RolesRoute = ({ component, path, exact, signedIn, allowedRoles, userRoles }) => {
    const isAllowed = () => {
        if (userRoles && userRoles.length && allowedRoles && allowedRoles.length) {
        return !!allowedRoles.find(allowedRole => userRoles.includes(allowedRole));
        }

        return false;
    }

    if (!signedIn) {
        return <Redirect to="/signin" />;
    }

    return (
        <React.Fragment>
        {isAllowed() ? (
            <Route path={path} component={component} exact={exact} />
        ) : (
            <div className="not-allowed">
            <h1>
                Нет доступа
            </h1>
            </div>
        )}
        </React.Fragment>
    );
}

export default RolesRoute;
