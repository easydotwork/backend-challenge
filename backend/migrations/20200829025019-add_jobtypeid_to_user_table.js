'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {
  return queryInterface.addColumn('Users', 'jobId', {
    type: Sequelize.INTEGER,
    after: "password",
    references: { model: 'JobTypes', key: 'id' }
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
