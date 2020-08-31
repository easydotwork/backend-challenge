'use strict';
const models = require('../models')

module.exports = app => {

    //gets all phone types
   app.get('/addresstypes', async (req, res) => {
        const addressTypes = await models.AddressType.findAll({ attributes: ['id', 'name'] });
        res.json(addressTypes);
    });

}