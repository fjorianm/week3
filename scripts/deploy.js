
const {utils} = require('ethers');


async function main() {
  const [owner] = await hre.ethers.getSigners();
  const contractFactory = await ethers.getContractFactory('DataConsumerV3');
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log('Contract deployed to address:', contract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
