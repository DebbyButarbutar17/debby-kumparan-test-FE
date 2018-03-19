import { ActionTypes } from '../../store/action-types';

const initialState = {
  detail_photo: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_GET_DETAIL_PHOTO: {
      return Object.assign({}, state, {
        detail_photo: action.detail_photo,
      });
      
    }
    default: {
      return state;
    }
  }
};

export default reducer;
