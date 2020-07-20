'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('contacts-social', {
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
        facebook: {
            type:Sequelize.STRING,
            allowNull:false
        },
        instagram: {
            type:Sequelize.STRING,
            allowNull:false
        },
        linkedin: {
            type:Sequelize.STRING,
            allowNull:false
        },
        pinterest: {
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
     await queryInterface.dropTable('contacts-social');
  }
};
