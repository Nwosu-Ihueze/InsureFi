// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const tokenAddress = "0x2D558E085C27D5FE9f7DDb76355f72A9d0D218A6"
  const claimAddress = "0x92a5B68B469B726c2Ee71Ba80EbEd0f56c8Ad3E3"
  const InsureFi = await ethers.getContractAt("InsureFi",tokenAddress);
//   const deployInsureFi = await InsureFi.deploy();

//   await deployInsureFi.deployed();

  console.log("Token address:", InsureFi.address);

  const mint = await InsureFi.mint(claimAddress,"1000000000000000000000000");
  console.log(mint);

//   console.log("Sleeping.....");
//   // Wait for etherscan to notice that the contract has been deployed
//   await sleep(50000);

    //   Verify the contract after deploying
    //   @ts-ignore
//   await hre.run("verify:verify", {
//     address: deployInsureFi.address,
//     constructorArguments: [],
//   });
}
function sleep(ms:any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
