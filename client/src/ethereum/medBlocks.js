import web3 from './web3';
import medBlocks from './build/MedBlocks.json';

const instance = new web3.eth.Contract(
  JSON.parse(medBlocks.interface),
  // '0x2f11A07C772c7556267c8CE1E48dFcA64f75B165'
  // '0xe857B2C6E878Be7A21240600efD82d27c26a33ec' //compiled using remix
  // '0x0D0e6A194d02a8D44009855E4518979F65681587' //added age
  // '0xaaDB3Cea35004E168E4BC0412152190947f182DA' //bloodGroup added only to patient
  '0x61264B636E0484ddbf8306384E50E0DEa99410e1' //age,bmi,sex,bloodGroup added
);

export default instance;