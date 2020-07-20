const { Model, DataTypes } = require('sequelize');

class Positions extends Model {
    static init(sequelize) {
        super.init({
         position:DataTypes.STRING
        }, {
            sequelize,
            modelName: 'positions'
        });
    }
}

module.exports = Positions; 
