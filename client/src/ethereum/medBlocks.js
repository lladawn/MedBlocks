import web3 from './web3';
import medBlocks from './build/MedBlocks.json';

const instance = new web3.eth.Contract(
  JSON.parse(medBlocks.interface),
  '0x2f11A07C772c7556267c8CE1E48dFcA64f75B165'
);

export default instance;