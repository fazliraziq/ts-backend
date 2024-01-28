const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  unique: {
    type: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING,
  },
  gps: {
    type: DataTypes.STRING,
  },
  totalTickets: {
    type: DataTypes.INTEGER,
  },
  availableTicket: {
    type: DataTypes.INTEGER,
  },
  eventDate: {
    type: DataTypes.DATEONLY,
  },
  checkIn: {
    type: DataTypes.TIME,
  },
  Checkout: {
    type: DataTypes.TIME,
  },
  isExpire: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

module.exports = Event;