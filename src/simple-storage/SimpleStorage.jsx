import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateValue } from './actions';

export const PATH = '/simple-storage';

const NEW_VALUE = 5;

export class SimpleStorage extends Component {
  componentWillMount() {
    console.log('IS WEB3 INSTANTIATED on componentWillMount?', this.props.isWeb3Instantiated);
  }

  componentDidMount() {
    console.log('IS WEB3 INSTANTIATED on componentDidMount?', this.props.isWeb3Instantiated);
  }

  componentWillReceiveProps(nextProps) {
    console.log('IS WEB3 INSTANTIATED on componentWillReceiveProps FOR THE FIRST TIME?',
      this.props.isWeb3Instantiated,
      nextProps.isWeb3Instantiated
    );
    if (!this.props.isWeb3Instantiated && nextProps.isWeb3Instantiated) {
      this.updateValue(NEW_VALUE);
    }
  }

  updateValue = (value) => {
    this.props.updateValue(value);
  }

  render() {
    const { storageValue } = this.props;

    return (
      <div>Storage value: <strong>{storageValue}</strong></div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { web3: web3_view = {} } = state;

  const { instance: web3 } = web3_view;
  const isWeb3Instantiated = !!web3;

  const { app = {} } = state;
  const { storageValue = 0 } = app;

  return {
    isWeb3Instantiated,
    storageValue,
  };
};

const mapDispatchToProps = { updateValue };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleStorage);
