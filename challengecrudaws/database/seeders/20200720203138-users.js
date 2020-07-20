'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'john.doe@transactsql.com',
        password: await bcrypt.hash('3ncryptm3', 10),
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
