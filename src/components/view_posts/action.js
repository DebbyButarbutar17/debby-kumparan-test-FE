import { ActionTypes } from '../../store/action-types';

export const setDetailPost = data => ({
  type: ActionTypes.PAGE_DETAIL_POST,
  detail_posts: data,
});

export const fetchDetailPost = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      dispatch(setDetailPost(data))
    })
};

export default {
  fetchDetailPost
};
