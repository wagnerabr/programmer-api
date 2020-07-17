const { Router } = require('express');
const routes = Router();
const ProgrammerController = require('./controllers/ProgrammerController');
const SearchController = require('./controllers/SearchController');
const UserController = require('./controllers/UserController');

//Methods HTTP: GET, POST, PUT, DELETE

/**
 * Tipos de parametros
 * Query Params: req.query (Filtros, ordenação, paginação)
 * Route Params: request.params (Identificar um recurso na alteração ou remoção)
 * Body 
 */
//MongoDB (Não-relacional)

routes.get('/programmers', ProgrammerController.index);
routes.post('/programmers', ProgrammerController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/login', UserController.findByNameAndPassword);

routes.get('/search', SearchController.index)

//exportando as rotas
module.exports = routes;