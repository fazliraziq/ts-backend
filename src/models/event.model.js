const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');
const Ticket = require('./ticket.model');
const Bill = require('./billing.model');
const User = require('./user.model');
const Review = require('./reviews.model');

class Event extends Model {}

Event.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  unique: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
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
  ticketPrice: {
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
  },
  UserId:{
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  }
},{
  sequelize,
  modelName: 'Event'
});

Event.hasMany(Ticket,{as: 'tickets'});
Event.hasMany(Review,{as: 'reviews'});
Event.hasMany(Bill,{as: 'bills'});

module.exports = Event;