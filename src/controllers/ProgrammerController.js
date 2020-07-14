const axios = require('axios'); 
const Programmer = require('../models/programmer');
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    //index, show, store, update, destroy
    async index(request, response) {
        const programmers = await Programmer.find();
        return response.json(programmers);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        
        let programmer = await Programmer.findOne({ github_username });

        if(!programmer) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            //se não existir o name, ele vai trazer o login no lugar
            const { name = login, avatar_url, bio} = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            programmer = await Programmer.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
           
        return response.json(programmer);
    }
}