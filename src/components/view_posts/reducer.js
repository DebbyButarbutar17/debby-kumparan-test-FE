import { ActionTypes } from '../../store/action-types';

const initialState = {
  detail_post: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_DETAIL_POST: {
      return Object.assign({}, state, {
        detail_post: action.detail_post,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
