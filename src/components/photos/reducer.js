import { ActionTypes } from '../../store/action-types';

const initialState = {
  photos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_LIST_PHOTOS: {
      return Object.assign({}, state, {
        photos: action.photos,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
