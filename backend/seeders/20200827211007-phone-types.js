'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PhoneTypes', [
    {
      name: 'Fixo'
    },
    {
      name: 'Celular'
    },
    {
      name: 'WhatsApp'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('AddressTypes', null, {});
  }

};
