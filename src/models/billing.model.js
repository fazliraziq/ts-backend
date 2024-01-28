const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

class Bill extends Model {
  static associate(models) {
    Bill.hasMany(models.Event, { as: 'events' });
    Bill.hasMany(models.User, { as: 'users' });
    Bill.hasOne(models.Ticket, { as: 'tickets' });
  }
}

Bill.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  transactionId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
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
},{
  sequelize,
  modelName: 'Bill'
});

module.exports = Bill;