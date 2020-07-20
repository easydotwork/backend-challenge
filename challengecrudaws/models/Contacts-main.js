const { Model, DataTypes } = require('sequelize');

class ContactsMain extends Model {
    static init(sequelize) {
        super.init({
            phone:DataTypes.INTEGER,
            cell:DataTypes.INTEGER,
            whatsapp:DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'contacts-main'
        });
    }
}

module.exports = ContactsMain;
