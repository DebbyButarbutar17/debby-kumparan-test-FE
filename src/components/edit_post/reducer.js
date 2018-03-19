import { ActionTypes } from '../../store/action-types';

const initialState = {
  edit_post: {},
  detail_post: {},
  // edit_detail_post: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_EDIT_POST: {
      return Object.assign({}, state, {
        edit_post: action.edit_post,
      });
    }
    // case ActionTypes.PAGE_EDIT_DETAIL_POST: {
    //   return Object.assign({}, state, {
    //     edit_detail_post: action.edit_detail_post,
    //   });
    // }
    case ActionTypes.PAGE_GET_EDIT_POST: {
      return Object.assign({}, state, {
        // edit_detail_post: action.edit_detail_post,
        detail_post: action.detail_post,
      });
    }
    
    default: {
      return state;
    }
  }
};

export default reducer;
