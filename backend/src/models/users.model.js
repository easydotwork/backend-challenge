const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
var bcrypt = require('bcrypt');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    email: {
      validate :{ isEmail: true },
      unique: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: true,
      validate: {is: /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/}
    },
    cnpj: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: true,
      validate: { is: /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/ }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isIn: [['Programador front-end', 'Programador back-end', 'Designer', 'Gerente de projetos']] }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    socialmedia: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { isIn: [['Facebook', 'Instagram', 'LinkedIn', 'Pinterest']] }
    },
    avatar: {
      type: DataTypes.BLOB('tiny'),
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  }, {
    instanceMethods: {
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      }
    }
  });

  return users;
};
