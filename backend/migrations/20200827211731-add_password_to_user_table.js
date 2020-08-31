'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {
  return queryInterface.addColumn('Users', 'password', {
    type: Sequelize.STRING,
    after: "email"
  });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
