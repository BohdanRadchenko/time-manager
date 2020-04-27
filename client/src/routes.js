import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AsyncDashboard, AsyncLogin, AsyncRegister} from "./async.routes";

export const useRoutes = (props) => {
  return (
    <div>
      <Switch>
          <Route path="/" exact >
          <AsyncDashboard/>
        </Route>

        <Route path="/login" >
          <AsyncLogin/>
        </Route>
          <Route path="/register" >
          <AsyncRegister/>
        </Route>

        <Redirect to="/"/>
      </Switch>
    </div>
  )
};