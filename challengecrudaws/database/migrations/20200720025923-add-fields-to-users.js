'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('users', 'password', Sequelize.STRING, {
        allowNull:false
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('users','password');
  }
};
