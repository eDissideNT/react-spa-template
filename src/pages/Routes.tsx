import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IndexPage } from './IndexPage/IndexPage';

export const Routes: React.FC = () => (
  <Suspense fallback='Loading...'>
    <Switch>
      <Route exact path='/'>
        <IndexPage />
      </Route>
    </Switch>
  </Suspense>
);
