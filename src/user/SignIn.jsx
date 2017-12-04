import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { signIn } from './actions';
import { getNextLocation } from './utils';

import { PATH as SIGN_UP_PATH } from './SignUp';

export const PATH = '/sign-in';

export class SignIn extends Component {
  handleClick = (event) => {
    const { signIn, history } = this.props;

    return signIn()
    .then((result) => {
      history.replace(getNextLocation());
    })
    .catch((error) => {
      history.replace(SIGN_UP_PATH);
    });
  }

  render() {
    return (
      <Button
        onClick={this.handleClick}
        content="Sign in"
      />
    );
  }
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = { signIn };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
