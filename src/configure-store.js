import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

/**
 * Redux store. Development mode includes redux-logger and Chrome Redux DevTools extension.
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState) {
  const isDev = process.env.NODE_ENV === 'development';
  let middlewares = [thunk];

  // TODO: Use LogRocket to debug production?
  //       {@link | https://blog.logrocket.com/redux-logging-in-production-3b2a4816b713}
  if (isDev) {
    const { logger } = require(`redux-logger`);
    middlewares = [ ...middlewares, logger ]; 
  }

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      isDev && window.devToolsExtension ? window.devToolsExtension() : f => f // Chrome Redux DevTools extension
    )
  );
}
