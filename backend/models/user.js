'use strict';

const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.User_Addresses);
      User.hasMany(models.User_Phones);
      User.hasMany(models.User_SocialNetworks);
      User.belongsTo(models.JobType, {foreignKey: 'jobId'});
    }
  };
  User.init({
    name: DataTypes.STRING,
    document: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePictureUrl: DataTypes.STRING,
    jobId: DataTypes.INTEGER,
  }, {
  hooks: {
    beforeCreate: async function(user) {
      console.log(user);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  },
    sequelize,
    modelName: 'User',
  });
  return User;
};