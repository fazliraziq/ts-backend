const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

class Ticket extends Model {
  static associate(models) {
    Ticket.hasOne(models.Event, { as: 'event' });
    Ticket.hasOne(models.User, { as: 'user' });
    Ticket.hasMany(models.Bill, { as: 'bills' });
  }
}

Ticket.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  unique: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  seatNo: {
    type: DataTypes.STRING,
  },
  barcode: {
    type: DataTypes.STRING,
  },
  verificationCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isExpire: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  isResell: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }

},{
  sequelize,
  modelName:'Ticket'
});

module.exports = Ticket;