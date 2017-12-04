import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import { signOut } from './actions';
import { PATH as NEXT_PATH } from './SignIn';

export const PATH = '/sign-out';

export class SignOut extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.signOut();
    }
  }

  signOut = () => {
    this.props.signOut();
  }

  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return (
        <Redirect to={NEXT_PATH} />
      );
    }

    return (
      <div>Logging you out...</div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { user: user_view = {} } = state;

  return {
    isAuthenticated: user_view.isAuthenticated
  };
}

const mapDispatchToProps = { signOut };

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOut));
