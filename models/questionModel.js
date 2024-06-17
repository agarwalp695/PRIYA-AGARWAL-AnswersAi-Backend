const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Question = db.define('Question', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
});

module.exports = Question;
