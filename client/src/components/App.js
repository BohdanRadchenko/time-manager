import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import * as sessionSelectors from '../redux/session/sessionSelectors'
import * as sessionOperations
  from '../redux/session/sessionOperations'
import Modal from './Modal/Modal'
import {useRoutes} from "../routes";
import {Loaders} from "./Loaders";

const App = ({isAuthentication, login}) => {
  const routes = useRoutes(isAuthentication)

  return (
      <Suspense fallback={<Loaders/>}>
        <Router basename='/'>
          {routes}
          <Modal/>
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
