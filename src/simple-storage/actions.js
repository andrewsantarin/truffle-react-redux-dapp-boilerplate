import SimpleStorageService from './service';

export function updateValue(value) {
  return (dispatch, getState) => {
    return SimpleStorageService(getState().web3.instance).updateValue(value)
    .then((result) => {
      dispatch(setValue(result));
    });
  }
}

export const SET_VALUE = 'SET_VALUE';
export function setValue(data) {
  return {
    type: SET_VALUE,
    data,
  };
}