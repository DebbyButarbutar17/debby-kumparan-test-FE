import { ActionTypes } from '../../store/action-types';

export const setEditPost = data => ({
  type: ActionTypes.PAGE_EDIT_DETAIL,
  edit_post: data,
});

// export const setDetailPost = data => ({
//   type: ActionTypes.PAGE_EDIT_DETAIL_POST,
//   edit_detail_post: data,
// });

export const setPostDetail = data => ({
  type: ActionTypes.PAGE_GET_EDIT_POST,
  detail_post: data,
});

// export const setListComment = data => ({
//   type: ActionTypes.PAGE_LIST_COMMENT,
//   list_comment: data,
// });

// export const fetchDetailPost = (id) => (dispatch) => {
//   fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     .then(result => {
//       return result.json();
//     }). then(data => {
//       console.log('detail', data);
//       dispatch(setDetailPost(data))
//     })
// };

export const fetchPostDetail = (id) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(result => {
      return result.json();
    }). then(data => {
      
      dispatch(setPostDetail(data))
    })
};

export const fetchEditPost = (id, params) => (dispatch) => {
  console.log('params', params);
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'put',
        body: params
      }).then(result => {
        console.log('result', result);
      return result.json();
    }). then(data => {
      console.log('edit', data);
      // dispatch(setEditPost(data))
    })
};

// export const fetchEditPost = (id, params) => (dispatch) => {
//   console.log('params ', params);
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'put',
//         body: JSON.stringify(params)
//       }).then(response => {
//         return response.json();
//       }).then(data => {
//         console.log('edit', data);
//         // ChromeSamples.log('Created Gist:', data.html_url);
//         dispatch(setEditPost(data))

//       });
// };

// export const fetchListComment = (id) => (dispatch) => {
//   fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
//     .then(result => {
//       return result.json();
//     }). then(data => {
//       console.log('detail', data);
//       dispatch(setListComment(data))
//     })
// };

export default {
  // fetchDetailPost, 
  fetchPostDetail,
  fetchEditPost
};
