import { bindActionCreators } from 'redux';

import * as CounterActions from './modules/counter';

import store from './index';
const { dispatch } = store;

export const CounterReducer = bindActionCreators(CounterActions, dispatch);
