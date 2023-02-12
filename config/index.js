const dot = require('dotenv');
dot.config();

const config = {
  dev: {
    username: 'root',
    password: env.process.DB_PW,
    database: 'react_card_game',
    host: env.process.HOST,
    host: 'ec2-3-36-55-166.ap-northeast-2.compute.amazonaws.com',
    dialect: 'mysql',
    timezone: '+09:00',
    port: '3306',
  },
};
// dzdzdz
module.exports = config;
