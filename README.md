# truffle-react-redux-dapp-boilerplate
This repo is a variation of [`truffle-box/react-auth-box`](https://github.com/truffle-box/react-auth-box/) based on the notion that code structured by domain (`cart`, `order`, `delivery`, `user`) is easier to understand than code structured by nature (`assets`, `lib`, `components`, `actions`, `reducers`).

The [Domain Driven Design](https://medium.com/@hassan.djirdeh/domain-driven-react-redux-a474ecf7d126) idea goes way back - as early as 2015 ([here's an article](https://marmelab.com/blog/2015/12/17/react-directory-structure.html) from Marmelab) - so, this is nothing new.

## Clone the repo
```
git clone https://github.com/masonforest/truffle-react-redux-starter-kit.git
```

## Installation
The instructions are identical to `react-auth-box`, with only one difference: The dapp's production build output folder is now called `dist` instead of `build_webpack`.

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```javascript
    truffle unbox react-auth
    ```

3. Run the development console.
    ```javascript
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

5. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

7. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

8. To build the application for production, use the build command. A production build will be in the `dist` folder.
    ```javascript
    npm run build
    ```
