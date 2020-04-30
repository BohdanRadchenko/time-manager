import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AsyncDashboard, AsyncLogin, AsyncRegister} from "./async.routes";

export const useRoutes = (isAuthentication) => {
    if (isAuthentication) {
        return <Switch>
            <Route path="/" exact>
                <AsyncDashboard/>
            </Route>

            <Redirect to="/"/>
        </Switch>
    }
    return (
        <Switch>
            <Route path="/login">
                <AsyncLogin/>
            </Route>
            <Route path="/register">
                <AsyncRegister/>
            </Route>

            <Redirect to="/login"/>
        </Switch>
    )
};