import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';

import Routes from './Routes';

export function App({ notifications, ...props }) {
  return (
    <div>
      <Routes />
      <Notifications {...{notifications}} />
    </div>
  );
}

App.propTypes = {
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({ notifications: state.notifications });
const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
