import Web3 from 'web3';

export const LOCALHOST_PROVIDER = 'http://localhost:8545';

const Web3Service = {
  getWeb3() {
    // On once the window has loaded, retrieve the web3.js instance.
    return new Promise((resolve, reject) => {
      // Wait for loading completion to avoid race conditions with web3 injection handling.
      window.addEventListener('load', () => {
        // Find `web3` from the browser (Mist/MetaMask).
        const { web3 } = window;
        const results = {
          web3: new Web3(!!web3
            // If it can be read (i.e. injected by the browser), use it.
            ? web3.currentProvider
            // Otherwise, fallback to the localhost provider.
            : new Web3.providers.HttpProvider(LOCALHOST_PROVIDER),
          ),
        };

        resolve(results);
      });
    });
  },

  getAccounts(web3) {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((error, accounts) => {
        if (error) {
          reject(error);
        }

        resolve(accounts);
      });
    });
  },

  getCoinbase(web3) {
    return new Promise((resolve, reject) => {
      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          reject(error);
        }

        resolve(coinbase);
      });
    });
  },
};

export function getWeb3() {
  return Web3Service.getWeb3();
}

export default Web3Service;
