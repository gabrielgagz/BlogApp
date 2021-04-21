'use-strict'

const { sequelize, Sequelize } = require('../helpers/sequelize');

const Post = sequelize.define('posts', {

    id: {type: Sequelize.SMALLINT, primaryKey: true},
    category: {type: Sequelize.STRING, foreingKey: true},
    content: Sequelize.TEXT,
    date: Sequelize.DATE,
    image: Sequelize.STRING,
    title: Sequelize.STRING,

},
    { freezeTableName: true } 
);

module.exports = Post;