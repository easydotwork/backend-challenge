'use strict';
const models = require('../models')

module.exports = app => {

    //gets all phone types
   app.get('/phonetypes', async (req, res) => {
        const phoneTypes = await models.PhoneType.findAll({ attributes: ['id', 'name'] });
        res.json(phoneTypes);
    });

}