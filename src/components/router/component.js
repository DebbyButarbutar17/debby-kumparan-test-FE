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
import { PageDetailAlbumWrapper } from '../view_albums';
import { PageEditPostWrapper } from '../edit_post';
import { PagePhotosWrapper } from '../photos';
import { PageDetailPhotoWrapper } from '../view_photo';
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
        path="/albums"
        component={PageAlbumsWrapper}
      />
      <Route
        path="/posts/:id"
        component={PageDetailPostWrapper}
      />
      <Route
        path="/photos/:id"
        component={PageDetailPhotoWrapper}
      />
      <Route
        path="/posts/edit/:id"
        component={PageEditPostWrapper}
      />
      <Route
        path="/photos"
        component={PagePhotosWrapper}
      />
    </Router>
  </Provider>
);

export default AppRoute;