const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'your_username',
    password: 'your_password',
    database: 'answersai_db',
    port: 5432,
    logging: false, // disable logging
});

module.exports = sequelize;
