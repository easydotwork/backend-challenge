'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AddressTypes', [
    {
      name: 'Residencial'
    },
    {
      name: 'Comercial'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('AddressTypes', null, {});

  }
};
