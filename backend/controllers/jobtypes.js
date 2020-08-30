'use strict';
const models = require('../models')

module.exports = app => {

    //gets all phone types
   app.get('/jobtypes', async (req, res) => {
        const jobTypes = await models.JobType.findAll({ attributes: ['id', 'name'] });
        res.json(jobTypes);
    });

}