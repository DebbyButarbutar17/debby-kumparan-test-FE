import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import pageUser from '../components/users/reducer';
import pagePost from '../components/posts/reducer';
import pageAlbums from '../components/albums/reducer';
import pageDetailPost from '../components/view_posts/reducer';
import pageDetailAlbum from '../components/view_albums/reducer';
import pageEditPost from '../components/edit_post/reducer';
import pagePhotos from '../components/photos/reducer';
import pageDetailPhoto from '../components/view_photo/reducer';


const reducers = combineReducers({
  pageUser,
  pagePost,
  pageAlbums,
  pageDetailPost,
  pageDetailAlbum,
  pageEditPost,
  pagePhotos,
  pageDetailPhoto,
  routing: routerReducer,
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
