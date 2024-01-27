const Sequelize = require('sequelize');

const sequelize = new Sequelize('ts-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.sync({ force: true }).then(() => {
console.log('Models synchronized with the database.');
});

module.exports = sequelize;