const Web3 = require('web3');

/**
 * Converts Gwei to Ether.
 * @param {number} gwei - The value in Gwei.
 * @returns {number} The equivalent value in Ether.
 */
function gweiToEther(gwei) {
    const web3 = new Web3(providerUrl);
    return gwei / 1000000000; // 1 Ether = 1,000,000,000 Gwei
  }
  
  module.exports = {
    gweiToEther
  };
