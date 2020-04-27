import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import controllerReducer from './controller/controllerReducers';

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  controller : controllerReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;