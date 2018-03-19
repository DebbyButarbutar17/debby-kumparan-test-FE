import { ActionTypes } from '../../store/action-types';

const initialState = {
  albums: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_LIST_ALBUMS: {
      return Object.assign({}, state, {
        albums: action.albums,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
