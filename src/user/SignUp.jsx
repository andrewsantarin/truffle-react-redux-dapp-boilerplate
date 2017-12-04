import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';

// import { signUp } from './actions';
import { signUp, signIn } from './actions';
import { PATH as USER_PROFILE_PATH } from './UserProfile';

export const PATH = '/sign-up';

export function Input({ meta: { error }, ...props }) {
  return (
    <p>
      <Form.Input {...props} />
      {!!error && <strong>{error}</strong>}
    </p>
  );
}

export class SignUp extends Component {
  signUp = (data) => {
    const { signUp, signIn } = this.props;

    return signUp(data).then(signIn).then((result) => {
      history.replace(USER_PROFILE_PATH);

      return result;
    });
  }

  render() {
    const {
      // redux-form
      handleSubmit,
      submitting,
      error,

      // ./actions
      signIn,

      // UI
      ...props
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.signUp)}>
        <h1>Sign Up</h1>
        <Field
          name="name"
          type="name"
          component={Input}
          placeholder="you@example.com"
          autoFocus
        />
        <Button
          type="submit"
          disabled={submitting}
          content="Sign up"
          icon="chevron right"
          labelPosition="right"
          color="green"
          size="large"
          fluid
        />
      </Form>
    );
  }
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = { signUp, signIn };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    reduxForm({
      form: 'signUp',
    })(SignUp)
  )
);
