const { Model, DataTypes } = require('sequelize');

class Addresses extends Model {
    static init(sequelize) {
        super.init({
         street:DataTypes.STRING,
         zipcode:DataTypes.STRING,
         number:DataTypes.INTEGER,
         neighborhood:DataTypes.STRING,
         city:DataTypes.STRING,
         state:DataTypes.STRING
        }, {
            sequelize,
            modelName: 'addresses'
        });
    }
}

module.exports = Addresses;
