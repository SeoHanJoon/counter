import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const configure = () => {
  const middleware = applyMiddleware(ReduxThunk, penderMiddleware());
  const store = createStore(modules, middleware);
  return store;
};

export default configure();
