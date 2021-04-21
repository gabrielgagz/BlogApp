'use-strict'

const { sequelize, Sequelize } = require('../helpers/sequelize');

const Category = sequelize.define('categories', {

    id: {
        type: Sequelize.SMALLINT,
        autoIncrement: true, 
        primaryKey: true, 
    },
    name: Sequelize.STRING,

},
    { freezeTableName: true } 
);

module.exports = Category;