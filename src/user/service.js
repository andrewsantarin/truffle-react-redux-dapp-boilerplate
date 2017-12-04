import contract from 'truffle-contract';

import Web3Service from '../web3/service';
import AuthenticationContract from '../../build/contracts/Authentication.json';

/**
 * UserService factory which accepts a Web3 instance with which to run user and auth services on.
 *
 * @param {Web3} web3 - the web3 instance
 */
export default function UserService(web3) {
  return {
    signIn(data) {
      return new Promise((resolve, reject) => {
        if (!web3) {
          const ERROR = 'Web3 is not initialized.';
          console.error(ERROR);
          reject(ERROR);
        }

        Web3Service.getCoinbase(web3)
        .then((coinbase) => {
          // Using truffle-contract, create the authentication object.
          const authentication = contract(AuthenticationContract);
          authentication.setProvider(web3.currentProvider);

          // Declaring this for later so we can chain functions on Authentication.
          let authenticationInstance;

          authentication.deployed()
          .then((instance) => {
            authenticationInstance = instance;

            // Attempt to sign up user.
            authenticationInstance.signIn({ from: coinbase })
            .then((result) => {
              // If no error, login user.
              const name = web3.toUtf8(result);

              resolve({ name });
            })
            .catch(reject);
          })
          .catch(reject);
        })
        .catch(reject);
      });
    },

    signUp(data) {
      return new Promise((resolve, reject) => {
        if (!web3) {
          const ERROR = 'Web3 is not initialized.';
          console.error(ERROR);
          reject(ERROR);
        }

        Web3Service.getCoinbase(web3)
        .then((coinbase) => {
          // Using truffle-contract, create the authentication object.
          const authentication = contract(AuthenticationContract);
          authentication.setProvider(web3.currentProvider);

          // Declaring this for later so we can chain functions on Authentication.
          let authenticationInstance;

          authentication.deployed()
          .then((instance) => {
            authenticationInstance = instance;

            // Attempt to sign up user.
            authenticationInstance.signUp(data.name, { from: coinbase })
            .then((result) => {
              // If no error, sign in user.
              resolve(result);
            })
            .catch(reject);
          })
          .catch(reject);
        })
        .catch(reject);
      });
    },

    signOut() {
      return Promise.resolve();
    },

    updateProfile(data) {
      return new Promise((resolve, reject) => {
        if (!web3) {
          const ERROR = 'Web3 is not initialized.';
          console.error(ERROR);
          reject(ERROR);
        }

        Web3Service.getCoinbase(web3)
        .then((coinbase) => {
          // Using truffle-contract, create the authentication object.
          const authentication = contract(AuthenticationContract);
          authentication.setProvider(web3.currentProvider);

          // Declaring this for later so we can chain functions on Authentication.
          let authenticationInstance;

          authentication.deployed()
          .then((instance) => {
            authenticationInstance = instance;

            // Attempt to sign up user.

            authenticationInstance.updateProfile(data.name, { from: coinbase })
            .then((result) => {
              // If no error, update user.
              console.info('authenticationInstance.updateProfile()', data.name);
              resolve({ name: data.name });
            })
            .catch(reject);
          })
          .catch(reject);
        })
        .catch(reject);
      });
    },
  };
}
