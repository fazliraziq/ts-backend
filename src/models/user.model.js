const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');
const Ticket = require('./ticket.model');
const Review = require('./reviews.model');
const Bill = require('./billing.model');
const Event = require('./event.model');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contact: {
    type: DataTypes.STRING,
  },
},{
  sequelize,
  modelName: 'User'
});

User.hasMany(Event,{as: 'events'});
User.hasMany(Bill,{as: 'bills'});
User.hasMany(Review,{as: 'reviews'});
User.hasMany(Ticket,{as: 'tickets'});

module.exports = User;