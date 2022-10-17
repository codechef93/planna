import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import appReducer from './reducers';
import appMiddleware from './middlewares';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  storeEnhancers(applyMiddleware(...appMiddleware, ReduxThunk))
);

export default store;
