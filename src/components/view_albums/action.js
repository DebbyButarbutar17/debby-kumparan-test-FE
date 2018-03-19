import { ActionTypes } from '../../store/action-types';

export const setDetailAlbum = data => ({
  type: ActionTypes.PAGE_DETAIL_ALBUM,
  detail_album: data,
});

export const fetchDetailAlbum = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
    .then(result => {
      return result.json();
    }). then(data => {

      dispatch(setDetailAlbum(data))
    })
};

export default {
  fetchDetailAlbum
};
