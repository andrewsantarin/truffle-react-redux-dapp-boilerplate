import UserService from './service';

export function signIn() {
  return (dispatch, getState) => {
    return UserService(getState().web3.instance).signIn()
    .then((result) => {
      dispatch(authenticate(result));
    });
  }
}

export function signOut() {
  return (dispatch) => {
    return UserService().signOut()
    .then(data => {
      dispatch(deAuthenticate());
    });
  }
}

export function signUp(data) {
  return (dispatch, getState) => {
    return UserService(getState().web3.instance).signUp(data)
    .then(UserService(getState().web3.instance).signIn);
  }
}

export const SET_USER_AUTH = 'SET_USER_AUTH';
export function setUserAuth(data, isAuthenticated = false) {
  return {
    type: SET_USER_AUTH,
    isAuthenticated,
    data,
  };
}

export function authenticate(user) {
  return setUserAuth(user, true);
}

export function deAuthenticate() {
  return setUserAuth(undefined, false);
}

export function updateProfile(data) {
  return (dispatch, getState) => {
    return UserService(getState().web3.instance).updateProfile(data)
    .then((result) => {
      console.info('actions.updateProfile(data)', result);
      dispatch(setProfile(result));
    });
  }
}

export const SET_PROFILE = 'SET_PROFILE';
export function setProfile(data) {
  return {
    type: SET_PROFILE,
    data,
  };
}
