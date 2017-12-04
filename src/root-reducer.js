import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';

import app from './app/reducer';
import simpleStorage from './simple-storage/reducer';
// import order from './order/reducer';
// import tour from './tour/reducer';
import user from './user/reducer';
import web3 from './web3/reducer';

const rootReducer = combineReducers({
  app,
  // order,
  // tour,
  simpleStorage,
  user,
  web3,
  form,
  notifications,
});

export default rootReducer;
