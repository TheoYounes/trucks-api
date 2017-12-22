const apiRoutes = require('express').Router();
const JSON = require('circular-json');
const {mainMicroServe} = require('../../microservice-ia/index');

const models = {
    Truck: require('../models/truck').model
};
// route to check is a user is available (POST http://localhost:8080/authenticate)
apiRoutes.post('/algoIA', function(req, res) {
    mainMicroServe();
    models.Truck.find({}).then((truck) => {
        console.log(truck);
    })
});

module.exports = apiRoutes;
