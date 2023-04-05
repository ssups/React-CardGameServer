const dot = require('dotenv');
dot.config();

const config = {
  dev: {
    username: 'root',
    // password: process.env.DB_PW,
    database: 'react_card_game',
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '+09:00',
    port: '3306',
    logging: false,
  },
};
// dzdzdz
module.exports = config;
