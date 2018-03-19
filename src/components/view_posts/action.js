import { ActionTypes } from '../../store/action-types';

export const setDetailPost = data => ({
  type: ActionTypes.PAGE_DETAIL_POST,
  detail_post: data,
});

export const setListComment = data => ({
  type: ActionTypes.PAGE_LIST_COMMENT,
  list_comment: data,
});

export const fetchDetailPost = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      console.log('detail', data);
      dispatch(setDetailPost(data))
    })
};

export const fetchListComment = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      console.log('detail', data);
      dispatch(setListComment(data))
    })
};

export default {
  fetchDetailPost,
  fetchListComment
};
