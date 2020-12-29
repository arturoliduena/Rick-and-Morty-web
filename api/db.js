require('dotenv').config();
const { DataTypes } = require('sequelize');
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');

const { DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));
// Cap. product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Characters } = sequelize.models;
const UserCharacter = sequelize.define('user_character', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  characterId: {
    type: DataTypes.INTEGER,
    references: {
      model: Characters,
      key: 'id'
    }
  }
});

User.belongsToMany(Characters, { through: UserCharacter });
Characters.belongsToMany(User, { through: UserCharacter });

module.exports = {
  ...sequelize.models, // to import the models like: const { Product, User } = require('./db.js');
  UserCharacter,
  conn: sequelize,     // to importart { conn } = require('./db.js');
};