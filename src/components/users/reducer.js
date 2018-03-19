import { ActionTypes } from '../../store/action-types';

const initialState = {
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_LIST_USER: {
      return Object.assign({}, state, {
        users: action.users,
      });
      // console.log('users', initialState.users);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
