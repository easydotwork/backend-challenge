'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('JobTypes', [
    {
      name: 'Programador front-end'
    },
    {
      name: 'Programador back-end'
    },
    {
      name: 'Designer'
    },
    {
      name: 'Gerente de projetos'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('JobTypes', null, {});
  }
};
