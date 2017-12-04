import {
  INITIALIZE_WEB3
} from './actions';

export const INITIAL_STATE = {
  instance: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIALIZE_WEB3:
      return {
        ...state,
        instance: action.payload.web3,
      };

    default:
      return state;
  }
}
