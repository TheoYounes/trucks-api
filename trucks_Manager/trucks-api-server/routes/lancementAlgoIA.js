const apiRoutes = require('express').Router();
const JSON = require('circular-json');
const algoIA = require('../../microservice-ia/index')
const models = {
    User: require('../models/user').model
};

// route to check is a user is available (POST http://localhost:8080/authenticate)
apiRoutes.post('/algoIA', function(req, res) {
    algoIA();
});

module.exports = apiRoutes;
