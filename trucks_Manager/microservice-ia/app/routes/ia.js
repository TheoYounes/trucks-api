const apiRoutes = require('express').Router();
const {mainAlgo} = require('../controller/algo-genetique');
const {createDBjourney} = require('../controller/create-journey');


apiRoutes.get('/ia', async function(req, res) {

    let trajets = await mainAlgo();
    let etapes = [];
    let ressources = [];
    for (let i = 0; i < trajets.length - 2; i++) {
        etapes.push(trajets[i][0]);
        ressources.push(trajets[i][1]);
    }
    createDBjourney(etapes, ressources);


});

module.exports = apiRoutes;