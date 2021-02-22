require('dotenv').config()

const { Sequelize } = require('sequelize');
const UserModel = require('./models/users')
const EventModel = require('./models/events')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const queryInterface = sequelize.getQueryInterface()
const Users = UserModel(sequelize, Sequelize)
const Events = EventModel(sequelize, Sequelize)

async function run() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}




module.exports = {
  Users, run, sequelize, Events, queryInterface
}

