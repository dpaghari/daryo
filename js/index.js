import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import store from "./store";

import App from './pages/App';
import Home from './pages/Home';

const history = syncHistoryWithStore(hashHistory, store);

render(<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('app'));
