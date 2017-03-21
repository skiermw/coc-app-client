import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NewNote from './containers/NewNote';

export default (props) => (
  <Router {...props}>
  <Route path="/" component={App}>
<IndexRoute component={Home} />
<Route path="login" component={Login} />
<Route path="signup" component={Signup} />
<Route path="notes/new" component={NewNote} />
  { /* Finally, catch all unmatched routes */ }
  <Route path="*" component={NotFound} />
</Route>
  </Router>
);
