const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('characters', {
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
};