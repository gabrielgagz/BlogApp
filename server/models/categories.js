'use-strict'

const { sequelize, Sequelize } = require('../helpers/sequelize');

const Category = sequelize.define('categories', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
        required: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING, 
        required: true,
        allowNull: false
    },

},
    { freezeTableName: true } 
);

module.exports = Category;