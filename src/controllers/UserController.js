const axios = require('axios'); 
const User = require('../models/user');
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    //index, show, store, update, destroy
    async index(request, response) {
        const users = await User.find();
        return response.json(users);
    },

    async findByNameAndPassword(request, response) {
        const { user_name, user_password } = request.body;
        const userConverter = row => ({
            id: row._id,
            name: row.user_name
        });

        let user = await User.findOne({ user_name, user_password });

        if(!user) { 
            response.json(`Erro ao buscar o usuário ${user_name}!`);
        }
           
        return response.json(userConverter(user));

    },

    async store(request, response) {
        const userConverter = row => ({
            id: row._id,
            name: row.user_name
        });

        const { user_name, user_password } = request.body;
        
        let user = await User.findOne({ user_name });

        if(!user) {
                
            user = await User.create({
                user_name,
                user_password
            })
        }
           
        return response.json(userConverter(user));
    }
}