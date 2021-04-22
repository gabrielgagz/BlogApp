'use-strict'

const { sequelize, Sequelize } = require('../helpers/sequelize');
const Category = require('./categories');

const Post = sequelize.define('posts', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
        required: true,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER, 
        required: true,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT, 
        required: true,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE, 
        required: true,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING, 
        required: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING, 
        required: true,
        allowNull: false
    },

},
    { freezeTableName: true } 
);

Post.belongsTo(Category, {
    foreignKey: 'categoryId'
});

module.exports = Post;