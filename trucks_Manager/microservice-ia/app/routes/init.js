const apiRoutes = require('express').Router();
const {createCities} = require('../controller/createCities');
const {main} = require('../controller/init-distance');
const {City} = require('../models/city');
const {Distance} = require('../models/distance');

apiRoutes.get('/init', async function(req, res) {
//on appel cette fct qu'une fois, pour initier la db
    console.log('on rentre dans lalgogéné');
    await City.find({})
        .then(city => {
            if (city === [] || !city || city.length === 0) {
                createCities();
            }
        });
//on appel cette fct qu'une fois, pour initier la db
    await Distance.find({})
        .then(distances => {
            if (distances === [] || !distances || distances.length === 0) {
                main();
            }
        });


});

module.exports = apiRoutes;