'use strict';
const models = require('../models')
const { userValidationRules, validate } = require('../validations/user.js')
const generator = require('generate-password')
const authMiddleware = require('../middleware/auth-middleware')

module.exports = app => {

    //gets all users
   /*app.get('/users', async (req, res) => {
        const users = await models.User.findAll({ attributes: ['name', 'email'] });
        res.json(users);
    });*/

    //gets the current validated user
    app.get('/users', authMiddleware, async (req, res) => {

        const id = req.jwtUserId;

        const user = await models.User.findOne({
            where: { id: id },
            attributes: ['name', 'email', 'document', 'profilePictureUrl', 'jobId'],
            include: [
                //models.JobType,
                {
                    model: models.User_Addresses,
                    attributes: ['addressTypeId', 'address']
                },
                {
                    model: models.User_Phones,
                    attributes: ['phoneTypeId', 'phoneNumber']
                },
                {
                    model: models.User_SocialNetworks,
                    attributes: ['socialNetworkTypeId', 'url']
                }
            ],
        });

        if (user === null) {
          res.status(404).send({message: `User not found`});
        } else {
          res.json(user);
        }

    });

    //creates a new user
    app.post('/users', userValidationRules(), validate, async (req, res) => {

        var user = await models.User.findOne({
            where: { email: req.body.email }
        });

        if (user !== null) {
            res.status(409).send({message: `User already exists`});

        } else {

            var pwd = await generator.generate({ length: 10, numbers: true });

            user = await models.User.create({
                name: req.body.name,
                email: req.body.email,
                document: req.body.document,
                jobId: req.body.jobId,
                password: pwd,
            });

            //const user = await models.User.findByPk(2);

            if (user !== null) {

                req.body.addresses.forEach(address => {
                   models.User_Addresses.create({userId : user.id, ...address});
                })

                req.body.phonenumbers.forEach(phonenumber => {
                    models.User_Phones.create({userId : user.id, ...phonenumber});
                })

                req.body.socialnetworks.forEach(socialnetwork => {
                    models.User_SocialNetworks.create({userId : user.id, ...socialnetwork});
                })

            }

            res.json({
                message: "User created!",
                credentials: {
                    email: user.email,
                    password: pwd,
                }
             });

        }

    });

    //updates user -- in progress
    app.put('/users/', authMiddleware, async (req, res) => {
        const id = req.params.id;
        //res.status(200).send({message: `user updated`});
    });

    //deletes the current validated user
    app.delete('/users', authMiddleware, async (req, res) => {

        const id = req.jwtUserId

        const user = await models.User.findByPk(id);
        if (user === null) {
          res.status(404).send({message: `User not found`});
        } else {
          //await user.destroy();
            res.status(200).send({message: `User deleted`});
        }

    });


};