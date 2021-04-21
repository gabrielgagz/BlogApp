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

// TODO: needs some improvement
sequelize.sync({ force: false , alter : true });

module.exports = Category;