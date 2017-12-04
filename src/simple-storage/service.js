import contract from 'truffle-contract';

import Web3Service from '../web3/service';
import SimpleStorageContract from '../../build/contracts/SimpleStorage.json';

export default function SimpleStorageService(web3) {
  return {
    updateValue(value) {
      return new Promise((resolve, reject) => {
        if (!web3) {
          const ERROR = 'Web3 is not initialized.';
          console.error(ERROR);
          reject(ERROR);
        }

        Web3Service.getAccounts(web3)
        .then((accounts) => {
          // Using truffle-contract, create the authentication object.
          const simpleStorage = contract(SimpleStorageContract);
          simpleStorage.setProvider(web3.currentProvider);

          // Declaring this for later so we can chain functions on SimpleStorage.
          let simpleStorageInstance;

          simpleStorage.deployed()
          .then((instance) => {
            simpleStorageInstance = instance;

            console.info(simpleStorageInstance);

            // Attempt to sign up user.
            return simpleStorageInstance.set(value, { from: accounts[0], });
          })
          .then((result) => {
            return simpleStorageInstance.get.call(accounts[0]);
          })
          .then((result) => ({
            storageValue: result.c[0],
          }))
          .then(resolve)
          .catch(reject);
        })
        .catch(reject);
      });
    },
  };
}
