const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  eventId: {
    type: DataTypes.INTEGER,
  },
  review: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Review;