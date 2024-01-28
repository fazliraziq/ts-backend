const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

class Review extends Model {
  static associate(models) {
    Review.hasOne(models.Event, { as: 'events' });
    Review.hasOne(models.User, { as: 'users' });
  }
}

Review.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  review: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  }
},{
  sequelize,
  modelName: 'Review'
});

module.exports = Review;