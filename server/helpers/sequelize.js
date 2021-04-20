'use-strict'

require('dotenv').config();

const { Sequelize } = require('sequelize');
//Connect to DB
const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/blog`);


module.exports= sequelize;