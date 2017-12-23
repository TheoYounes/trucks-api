const mongoose = require('mongoose');
require('dotenv').config();
const {mainAlgo} = require('./app/controller/algo-genetique');
const {createDBjourney} = require('./app/controller/create-journey');
const {createCities} = require('./app/controller/createCities');
const {main} = require('./app/controller/init-distance');
const {City} = require('./app/models/city');
const {Distance} = require('./app/models/distance');
mongoose.connect(process.env.DB, {useMongoClient: true});

const mainMicroServe = async () => {
    //on appel cette fct qu'une fois, pour initier la db
    console.log('on rentre dans lalgogéné');
    City.find({})
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
    let trajets = await mainAlgo();
    let etapes = [];
    let ressources = [];
    for (let i = 0; i < trajets.length - 2; i++) {
        etapes.push(trajets[i][0]);
        ressources.push(trajets[i][1]);
    }
    createDBjourney(etapes, ressources);


};


module.exports = {mainMicroServe};