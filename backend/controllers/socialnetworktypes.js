'use strict';
const models = require('../models')

module.exports = app => {

    //gets all phone types
   app.get('/socialnetworktypes', async (req, res) => {
        const socialNetworkTypes = await models.SocialNetworkType.findAll({ attributes: ['id', 'name'] });
        res.json(socialNetworkTypes);
    });

}