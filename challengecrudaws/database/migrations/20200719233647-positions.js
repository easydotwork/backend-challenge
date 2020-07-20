'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('positions', {
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
        position: {
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
     await queryInterface.dropTable('positions');
  }
};
