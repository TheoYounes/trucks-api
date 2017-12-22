const mongoose = require('mongoose');
require('dotenv').config();
const {mainAlgo, nbElmMax} = require('./app/controller/algo-genetique');
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
        })
    mainAlgo();

};

// const startAlgo = async (trucks) => {
//   let journey = await mainAlgo();
//   let steps = [];
//   let ressources = [];
//   console.log(journey);
//   for(let i = 0; i < nbElmMax - 1; i++) {
//     steps.push(journey[i][0]);
//     ressources.push(journey[i][1]);
//   }
//   createDBjourney(steps, ressources, trucks);
// };
//
//
// startAlgo("5a3a95823997521bb0263eff");

module.exports = {mainMicroServe}