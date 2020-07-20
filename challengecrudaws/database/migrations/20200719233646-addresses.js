'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('addresses', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        usersId: {
            type:Sequelize.INTEGER,
            references: { model:'users', key:'id' },
            allowNull:false,
            onUpdate:'CASCADE',
            onDelete:'CASCADE'
        },        
         street: {
            type:Sequelize.STRING,
            allowNull:false
        },
         zipcode: {
            type:Sequelize.STRING,
            allowNull:false
        },
         number: {
            type:Sequelize.INTEGER,
            allowNull:false
        },
         neighborhood: {
            type:Sequelize.STRING,
            allowNull:false
        },
         city: {
            type:Sequelize.STRING,
            allowNull:false
        },
         state: {
            type:Sequelize.STRING,
            allowNull:false
        },
         createdAt: {
            type:Sequelize.DATE,
            allowNull:false
        },
         updatedAt: {
            type:Sequelize.DATE,
            allowNull:false
        },
    });
  },
  

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('addresses');
  }
};
