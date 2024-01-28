const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user.model');
const Event = require('./event.model');
const Ticket = require('./ticket.model');

const Bill = sequelize.define('Bill', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  transactionId: {
    type: DataTypes.UUIDV4
  },
  price: {
    type: DataTypes.INTEGER,
  },
  isPurchased: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isCart: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
  },
});

Bill.belongsTo(Event);
Bill.belongsTo(Ticket);
Bill.belongsTo(User);

module.exports = Bill;