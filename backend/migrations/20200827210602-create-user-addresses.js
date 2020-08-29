'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      addressTypeId: {
        type: Sequelize.INTEGER,
        references: { model: 'AddressTypes', key: 'id' }
      },
      adress: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_Addresses');
  }
};