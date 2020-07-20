const { Model, DataTypes } = require('sequelize');

class ContactsSocial extends Model {
    static init(sequelize) {
        super.init({
            facebook:DataTypes.STRING,
            instagram:DataTypes.STRING,
            linkedin:DataTypes.STRING,
            pinterest:DataTypes.STRING
        }, {
            sequelize,
            modelName: 'contacts-social'
        });
    }
}

module.exports = ContactsSocial;
 
