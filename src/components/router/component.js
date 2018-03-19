import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';
import { store } from '../../store/store';

import { PageUserWrapper } from '../users';
import { PagePostWrapper } from '../posts';
import { PageAlbumsWrapper } from '../albums';
import { PageDetailPostWrapper } from '../view_posts';
const history = syncHistoryWithStore(browserHistory, store);


export const AppRoute = () => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route
        path="/"
        component={PageUserWrapper}
      />
      <Route
        path="/posts"
        component={PagePostWrapper}
      />
      <Route
        path="/albums/:id"
        component={PageAlbumsWrapper}
      />
      <Route
        path="/posts/:id"
        component={PageDetailPostWrapper}
      />
    </Router>
  </Provider>
);

export default AppRoute;