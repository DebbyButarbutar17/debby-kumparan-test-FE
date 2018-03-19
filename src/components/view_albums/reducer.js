import { ActionTypes } from '../../store/action-types';

const initialState = {
  detail_album: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_DETAIL_ALBUM: {
      return Object.assign({}, state, {
        detail_album: action.detail_album,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
