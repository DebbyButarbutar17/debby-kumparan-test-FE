import { ActionTypes } from '../../store/action-types';

export const setListAlbums = data => ({
  type: ActionTypes.PAGE_LIST_ALBUMS,
  albums: data,
});

export const fetchUserAlbumsList = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/albums?userId=' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      dispatch(setListAlbums(data))
    })
};

export default {
  fetchUserAlbumsList
};
