import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

export default function Root({ store, ...props }) {
  return (
    <Provider {...{store}}>
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object
};
