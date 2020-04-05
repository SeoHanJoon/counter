import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import counter from './counter';

export default combineReducers({
  counter,
  pender: penderReducer,
});
