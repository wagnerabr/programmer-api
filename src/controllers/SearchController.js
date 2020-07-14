const { index } = require("../utils/PointSchema");

const Programmer = require('../models/programmer');
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        //Buscar todos os devs num raio de 10km
        //Filtrar por tecnologias
        const { latitude, longitude, techs} = request.query;
        
        const techsArray = parseStringAsArray(techs);

        //in é um operator do mongodb
        const programmers = await Programmer.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ programmers });

    }
}

//Exercicio - finalizar os methods do controller, update, destroy;