const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const MedBlocks = require('./build/MedBlocks.json');

const provider = new HDWalletProvider(
  'tiger smoke wash walnut tomorrow butter address install vacant advance hello protect',
  'https://kovan.infura.io/v3/97c2d52095a84da7a0b710a8daa16acf'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account',accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(MedBlocks.interface)
  )
  .deploy({
    data: '0x' + MedBlocks.bytecode
  })
  .send({
    gas: '8000000',
    from: accounts[0]
  });

  console.log('Contract deployed to :',result.options.address);
};

deploy();