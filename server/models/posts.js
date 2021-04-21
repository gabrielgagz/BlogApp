'use-strict'

const { sequelize, Sequelize } = require('../helpers/sequelize');

const Post = sequelize.define('posts', {

    id: {
        type: Sequelize.SMALLINT,
        autoIncrement: true, 
        primaryKey: true, 
    },
    category: {type: Sequelize.SMALLINT, foreingKey: true},
    content: Sequelize.TEXT,
    date: Sequelize.DATE,
    image: Sequelize.STRING,
    title: Sequelize.STRING,

},
    { freezeTableName: true } 
);

// TODO: needs some improvement
sequelize.sync({ force: false , alter : true });

module.exports = Post;