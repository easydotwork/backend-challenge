'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Phones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Phones.init({
    userId: DataTypes.INTEGER,
    phoneTypeId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Phones',
  });
  return User_Phones;
};