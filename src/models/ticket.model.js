const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  unique: {
    type: DataTypes.UUIDV4
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
});

module.exports = Ticket;