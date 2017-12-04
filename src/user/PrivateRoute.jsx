import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { PATH as SIGN_IN_PATH } from '../user/SignIn'; // was '../user/VerifyEmail';

export function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: `${SIGN_IN_PATH}/?next=${props.location.pathname}`,
          state: {
            from: props.location,
            here: `${SIGN_IN_PATH}/`
          }
        }}/>
      )
    )}/>
  );
}

const mapStateToProps = (state, props) => {
  const { user: user_view = {} } = state;

  return {
    isAuthenticated: user_view.isAuthenticated
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
