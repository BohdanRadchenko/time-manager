import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import controllerReducer from './controller/controllerReducers';
import sessionReducer from "./session/sessionReducer";
import listsReducer from "./lists/listsReducer";
import boardsReducer from "./boards/boardsReducer";

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  controller : controllerReducer,
  session: sessionReducer,
  lists : listsReducer,
  boards : boardsReducer
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;