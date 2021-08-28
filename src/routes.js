import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main';
import Repository from './pages/repository';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Repo" component={Repository} />
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
