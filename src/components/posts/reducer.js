import { ActionTypes } from '../../store/action-types';

const initialState = {
  posts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_LIST_POST: {
      return Object.assign({}, state, {
        posts: action.posts,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
