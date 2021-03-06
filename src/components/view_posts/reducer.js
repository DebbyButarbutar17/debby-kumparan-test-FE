import { ActionTypes } from '../../store/action-types';

const initialState = {
  detail_post: {},
  list_comment: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_DETAIL_POST: {
      return Object.assign({}, state, {
        detail_post: action.detail_post,
      });
      
    }
    case ActionTypes.PAGE_LIST_COMMENT: {
      return Object.assign({}, state, {
        list_comment: action.list_comment,
      });
      
    }
    default: {
      return state;
    }
  }
};

export default reducer;
