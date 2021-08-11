import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
   JSON.parse(CampaignFactory.interface),
  '0x2cB0B50F6513fb4221095D140cb4fcAfE3b52574'
);

export default instance; 