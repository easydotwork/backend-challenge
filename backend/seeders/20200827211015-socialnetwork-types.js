'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SocialNetworkTypes', [
    {
      name: 'Facebook'
    },
    {
      name: 'Instagram'
    },
    {
      name: 'LinkedIn'
    },
    {
      name: 'Pinterest'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('SocialNetworkTypes', null, {});
  }
};
