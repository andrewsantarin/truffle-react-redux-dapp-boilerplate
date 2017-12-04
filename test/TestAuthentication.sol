pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Authentication.sol";

contract TestAuthentication {

  function testUserCanSignUpAndLogin() {
    Authentication authentication = Authentication(DeployedAddresses.Authentication());

    authentication.signUp('testuser');

    bytes32 expected = 'testuser';

    Assert.equal(authentication.signIn(), expected, "It should sign up and log in a user.");
  }

}
