const Sequelize = require('sequelize');

const sequelize = new Sequelize('ts_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.sync({ force: false }).then(() => {
console.log('Models synchronized with the database.');
});

module.exports = sequelize;