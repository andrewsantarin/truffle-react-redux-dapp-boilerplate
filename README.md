# truffle-react-redux-dapp-boilerplate
This repo is a variation of [`truffle-box/react-auth-box`](https://github.com/truffle-box/react-auth-box/) based on the notion that code structured by domain (`cart`, `order`, `delivery`, `user`) is easier to understand than code structured by nature (`assets`, `lib`, `components`, `actions`, `reducers`).

The [Domain Driven Design](https://medium.com/@hassan.djirdeh/domain-driven-react-redux-a474ecf7d126) idea goes way back - as early as 2015 ([here's an article](https://marmelab.com/blog/2015/12/17/react-directory-structure.html) from Marmelab) - so, this is nothing new.

## Installation
The instructions are identical to `react-auth-box`, with only two difference: The dapp's production build output folder is now called `dist` instead of `build_webpack` and that you clone this repo instead of running `truffle unbox react-auth`.

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Clone this repo
    ```javascript
    git clone https://github.com/andrewsantarin/truffle-react-redux-dapp-boilerplate.git
    ```
    
3. Install the dependencies
    ```javascript
    npm install
    ```

4. Run the development console.
    ```javascript
    truffle develop
    ```

5. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

6. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```

7. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

8. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

9. To build the application for production, use the build command. A production build will be in the `dist` folder.
    ```javascript
    npm run build
    ```
