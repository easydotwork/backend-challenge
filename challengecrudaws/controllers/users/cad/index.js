'use strict';
const Users = require('../../../models/Users');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = {
    async insert (req,res) {
        try {
            const { name, email, password } = req.body;
            const hash = await bcrypt.hash(password, 10);
            if(await Users.findOne({ email }))
                return res.status(400).json({
                    message: 'Erro: usuário já existe'
                });
            const users = await Users.create({ name, email, password:hash });
            users.password = undefined;
            return res.json(users);
        } catch(error){
            res.status(400).json({
                message: 'Erro ao inserir registro',
                origin:error.name
            });
        }
    },
    async authenticate (req,res) {
        try {
            const { email, password } = req.body;
            const users = await Users.findOne({ email });
            if(!users)
                return res.status(400).json({
                    message: 'Erro: usuário não encontrado'
            });
            if(!await bcrypt.compare(password, users.password))
                return res.status(400).json({
                    message: 'Erro: senha inválida'
            });
            users.password = undefined;
            return res.json(users);
        } catch(error){
            res.status(404).json({
                message: 'Erro ao carregar registro',
                origin:error.name
            });
        }
    },
    async viewAll (req,res) {
        try {
            const users = await Users.findAll({
                attributes: {
                    exclude:['password']
                }
            });
            return res.json(users);    
        } catch(error){
            res.status(404).json({
                message: 'Erro ao carregar registro',
                origin:error.name
            });
        }
    },
    async viewAllFilter (req,res) {
        try {
            const { field } = req.params;
            const attrs = JSON.stringify(field.split('|'));
            const users = await Users.findAll({
                attributes: { 
                    include:JSON.parse(attrs),
                    exclude:['password']
                }
            });
            return res.json(users);
        } catch(error){
            res.status(400).json({
                message: 'Erro ao carregar registro',
                origin:error.name
            });
        }
    },
    async viewAllWhere (req,res) {
        try {
            const { field, value } = req.params;
            const users = await Users.findAll({
                where: {
                    [field]:{ [Op.iLike]:value }
                },
                attributes: {
                    exclude:['password']
                }
            });
            return res.json(users);    
        } catch(error){
            res.status(400).json({
                message: 'Erro ao carregar registro',
                origin:error.name
            });
        }
    },
    async update (req,res) {
        try {
            const { id, field, value } = req.body;
                
            
            const users = await Users.update({
                [field]:value
            },
            {
                where: { id }
            });
            return res.json({
                message: 'Registro atualizado com sucesso.',
            });
        } catch(error){
            res.status(400).json({
                message: 'Erro ao atualizar registro',
                origin:error.name
            });
        }        
    },
    async erase (req,res) {
        try {
            const { id } = req.body;
            const users = await Users.destroy({
                where:{
                    id
                }
            });
            return res.json({
                message: 'Registro excluído com sucesso.'
            });
        } catch(error){
            res.status(400).json({
                message: 'Erro ao excluir registro',
                origin:error.name
            });
        }        
    }
}
