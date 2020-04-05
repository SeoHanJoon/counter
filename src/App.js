import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from './reducers';

import CounterRedux from './container/CounterRedux';
import CounterHook from './container/CounterHook';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={CounterHook} />
        <Route exact path="/redux" component={CounterRedux} />
      </Router>
    </Provider>
  );
};

export default App;
