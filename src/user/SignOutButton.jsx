import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import { signOut } from './actions';
import { PATH as NEXT_PATH } from './SignIn';

export function SignOutButton({ history, signOut, ...props }) {
  return (
    <Button
      onClick={() => signOut().then(() => history.push(NEXT_PATH))}
      icon="log out"
      content="Sign Out"
    />
  );
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = { signOut };

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOutButton));
