import { ActionTypes } from '../../store/action-types';

export const setListPost = data => ({
  type: ActionTypes.PAGE_LIST_POST,
  posts: data,
});

export const fetchUserPostList = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      dispatch(setListPost(data))
    })
};

export default {
  fetchUserPostList
};
