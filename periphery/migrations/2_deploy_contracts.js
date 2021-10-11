const Router = artifacts.require("MPswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports =async function(deployer, network) {

  let weth;
  const FACTORY_ADDRESS = '0xF52651df4f78C69D881B10d8a5999E70352083a3';

  if(network === 'mainnet'){
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
