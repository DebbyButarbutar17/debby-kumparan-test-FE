import { ActionTypes } from '../../store/action-types';

export const setListUser = data => ({
  type: ActionTypes.PAGE_LIST_USER,
  users: data,
});

export const fetchUserList = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => {
      return result.json();
    }). then(data => {
      dispatch(setListUser(data))
    })
};

export default {
  fetchUserList
};
