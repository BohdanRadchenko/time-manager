import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
  AsyncDashboard, AsyncHome,
  AsyncLogin,
  AsyncRegister
} from "./async.routes";

export const useRoutes = (isAuthentication) => {
  if (isAuthentication) {
    return <Switch>
      <Route path="/dashboard/:id">
        <AsyncDashboard/>
      </Route>

      <Route path="/home">
        <AsyncHome/>
      </Route>

      <Redirect to="/home" />
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