import React from 'react';
import HomePage from './HomePage';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';

function MainRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/homepage" component={HomePage} />
    </Switch>
  );
}

export default MainRoute;
