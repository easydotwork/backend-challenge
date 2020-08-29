'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const models = require('../models')
const { authValidationRules, validate } = require('../validations/auth.js')

module.exports = app => {

    app.post('/auth', authValidationRules(), validate, async (req, res) => {

        //h4AlUZQ1iW

        const user = await await models.User.findOne({ where: { email: req.body.email }, attributes: ['id', 'password'] });

        if ( (user !== null) && (bcrypt.compareSync(req.body.password, user.password)) ) {

            var id = user.id;
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 3600 // expires in 1 hour
            });

            return res.json({ auth: true, token: token });

        } else {
            res.status(400).send({message: `wrong credentials`});
        }

    });


};