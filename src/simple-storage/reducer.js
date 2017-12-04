import {
  SET_VALUE
} from './actions';

export const INITIAL_STATE = {
  updated: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        updated: true,
      };

    default:
      return state;
  }
}
