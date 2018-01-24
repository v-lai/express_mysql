const Sequelize = require('sequelize');
const config = require('../config');
const Chat = require('./chat');
const User = require('./user');
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Chat = Chat(sequelize, Sequelize);
db.User = User(sequelize, Sequelize);

module.exports = db;
