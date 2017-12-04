import {
  SET_USER_AUTH,
  SET_PROFILE
} from './actions';

export const INITIAL_STATE = {
  isAuthenticated: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };

    default:
      return state;
  }
}

  // if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED')
  // {
  //   return Object.assign({}, state, {
  //     data: action.payload
  //   })
  // }

  // if (action.type === 'USER_LOGGED_OUT')
  // {
  //   return Object.assign({}, state, {
  //     data: null
  //   })
  // }

  // return state
