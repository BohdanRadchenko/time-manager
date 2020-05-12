import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import * as sessionSelectors from '../redux/session/sessionSelectors'
import * as sessionOperations
  from '../redux/session/sessionOperations'
import {Loaders} from "./Loaders"
import {useRoutes} from "../routes";

const App = ({isAuthentication}) => {
  const routes = useRoutes(isAuthentication)

  return (
      <Suspense fallback={<Loaders/>}>
        <Router basename='/'>
          {routes}
        </Router>
      </Suspense>
  );
}

const mSTP = state => (
    {
      isAuthentication: sessionSelectors.isAuthentificated(state),
    }
)

const mDTP = {
  login: sessionOperations.relogin
}

export default connect(mSTP, mDTP)(App);
