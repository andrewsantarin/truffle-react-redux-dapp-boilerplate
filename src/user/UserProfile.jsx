import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';
import { success as showSuccess, error as showError } from 'react-notification-system-redux';

import { updateProfile } from './actions';
import { PATH as SIGN_OUT_PATH } from './SignOut';

export const PATH = '/profile';

export function Input({ meta: { error }, ...props }) {
  return (
    <p>
      <Form.Input {...props} />
      {!!error && <strong>{error}</strong>}
    </p>
  );
}

export function UserProfile(props) {
  const {
    // redux-form
    handleSubmit,
    submitting,
    error,

    // ./actions
    updateProfile,
    showSuccess,
    showError,

    // UI
    ...uiProps
  } = props;

  return (
    <Form onSubmit={handleSubmit(data => 
      updateProfile(data)
      .then((result) => {
        showSuccess({
          title: 'Profile updated!',
        });
      })
      .catch((error) => {
        showError({
          title: 'Profile failed to update',
          children: (
            <div>
              <p>We've encountered an error:</p>
              <code>{JSON.stringify(error, null, 2)}</code>
            </div>
          ),
        });
      })
    )}>
      <h1>User Profile</h1>
      <Link to={SIGN_OUT_PATH}>Sign out</Link>
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
        content="Update profile"
        icon="chevron right"
        labelPosition="right"
        color="green"
        size="large"
        fluid
      />
    </Form>
  );
}

const mapStateToProps = (state, props) => {
  const { app = {} } = state;
  const { name = '' } = app;
  
  return {
    initialValues: {
      name,
    },
  };
};
const mapDispatchToProps = {
  updateProfile,
  showSuccess,
  showError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'userProfile',
  })(UserProfile)
)