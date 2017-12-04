import React from 'react';
import ReactDOM from 'react-dom';
import { success as showSuccess, error as showError } from 'react-notification-system-redux';

import { getWeb3 } from './web3/service';
import { initializeWeb3 } from './web3/actions';
import configureStore from './configure-store';
import INITIAL_STATE from './initial-state';
import Root from './Root';

// Create store, then instantiate the Web3 instance.
const store = configureStore(INITIAL_STATE);

getWeb3()
.then((results) => {
  store.dispatch(initializeWeb3(results));
  store.dispatch(showSuccess({
    title: 'Web3 initialized!',
    position: 'tr',
  }));
  console.log('Web3 initialized!');
})
.catch((error) => {
  store.dispatch(showError({
    title: 'Web3 not initialized',
    position: 'tr',
    children: (
      <div>{JSON.stringify(error, null, 2)}</div>
    ),
  }));
  console.error('Error in Web3 initialization.');
  console.error(error);
});

// Render the app.
const ROOT_ELEM_ID = '#root';

function renderApp(RootComponent) {
  ReactDOM.render(
    <RootComponent {...{store}} />,
    document.querySelector(ROOT_ELEM_ID)
  );
}

renderApp(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default;

    renderApp(NextApp);
  });
}
