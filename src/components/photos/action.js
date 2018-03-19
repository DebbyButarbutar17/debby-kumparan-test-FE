import { ActionTypes } from '../../store/action-types';

export const setListPhotos = data => ({
  type: ActionTypes.PAGE_LIST_PHOTOS,
  photos: data,
});

export const fetchListPhotos = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      dispatch(setListPhotos(data))
    })
};

export default {
  fetchListPhotos
};
