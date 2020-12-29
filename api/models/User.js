const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false,
      },
      set(value) {
        if (value) {
          this.setDataValue('username', value.trim().toLowerCase())
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: false,
        isEmail: true,
      },
      set(value) {
        if (value) {
          this.setDataValue('email', value.trim().toLowerCase())
        }
      },
    },
    googleId: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
      },
    },
    githubId: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
      },
      set(value) {
        if (value) {
          const hashedPass = bcrypt.hashSync(value.trim(), 10)
          this.setDataValue('password', hashedPass)
        }
      },
    }
  });

  User.prototype.compare = function (password) {
    return bcrypt.compareSync(password, this.password)
  };

  return User;

}