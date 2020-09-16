'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); //nmp packages
const basename = path.basename(__filename);//current file name
const env = process.env.NODE_ENV || 'development'; //  environment - default development
const config = require(__dirname + '/../config/config.json')[env]; //
const db = {}; //makes an object

let sequelize;
if (config.use_env_variable) { //if there's something defined by the environment do this work
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config); // creates db models
}

fs
  .readdirSync(__dirname) // this reads all the files on models and returns an array with all the file  names
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); //returns all the names with .js
  })
  .forEach(file => {//for each file that passes the test, and for each element that gets return,  look each one of those files import from that file name what's being exported from the file.
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
