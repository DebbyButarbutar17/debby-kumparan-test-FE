import { ActionTypes } from '../../store/action-types';

export const setDetailPhoto = data => ({
  type: ActionTypes.PAGE_GET_DETAIL_PHOTO,
  detail_photo: data,
});

export const fetchDetailPhoto = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/photos/' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      dispatch(setDetailPhoto(data))
    })
};

export default {
  fetchDetailPhoto
};
