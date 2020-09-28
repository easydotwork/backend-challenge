const { Service } = require('feathers-sequelize');

exports.Users = class Users extends Service {
  create (data, params) {
        
    const { name, cpf, cnpj, role, address, phone, socialmedia, email, password, avatar } = data;
        
    const userData = {
      name,
      cpf,
      cnpj,
      role,
      address,
      phone,
      email,
      password,
      socialmedia,
      avatar
    };
    
    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }
};
