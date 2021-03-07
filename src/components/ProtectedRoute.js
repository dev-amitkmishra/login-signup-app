import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    logoutHandler,
    username,
    ...otherProps
}) => {
    return (
        <Route {...otherProps} render={(props) => {
            if (isAuthenticated) {
                return <Component logoutHandler={ logoutHandler } username={username} />
            } else {
                return (
                    <Redirect to={{pathname: '/login', state: { from: props.location }}} />
                )
            }
        }}
        />
    )
}

export default ProtectedRoute;