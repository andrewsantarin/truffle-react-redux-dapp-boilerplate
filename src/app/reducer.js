import merge from 'lodash/merge';

import { SET_USER_AUTH, SET_USER_PROFILE } from '../user/actions';
import { SET_VALUE } from '../simple-storage/actions';

// This reducer manages the master data of the entire app.
// That means there's only one source of truth regardless of view.
// It doesn't matter whether you're browsing Users.jsx or Posts.jsx.
// Where there is overlap, it will be seen here.
export const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_AUTH:
    case SET_USER_PROFILE:
    case SET_VALUE:
      // Merge new data with the existing one.
      // Never take the old data away.
      return merge({}, state, action.data);
    default:
      return state;
  }
}
