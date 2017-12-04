import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import PrivateRoute from '../user/PrivateRoute';
import Home, { PATH as HOME_PATH } from '../page/Home';
import NotFound from '../page/NotFound';
import UserProfile, { PATH as USER_PROFILE_PATH } from '../user/UserProfile';
import SignIn, { PATH as SIGN_IN_PATH } from '../user/SignIn';
import SignUp, { PATH as SIGN_UP_PATH } from '../user/SignUp';
import SignOut, { PATH as SIGN_OUT_PATH } from '../user/SignOut';
import SimpleStorage, { PATH as SIMPLE_STORAGE_PATH } from '../simple-storage/SimpleStorage';

const PATH = '/';

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path={PATH} component={Home} />

      <PrivateRoute path={USER_PROFILE_PATH} component={UserProfile} />

      <Route path={SIGN_IN_PATH} component={SignIn} />
      <Route path={SIGN_UP_PATH} component={SignUp} />
      <Route path={SIGN_OUT_PATH} component={SignOut} />

      <Route path={SIMPLE_STORAGE_PATH} component={SimpleStorage} />

      <Route component={NotFound} />
    </Switch>
  );
}
