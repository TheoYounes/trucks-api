const apiRoutes = require('express').Router();
const rp = require('request-promise');

apiRoutes.get('/ia', function(req, res) {
    const url = `${process.env.IA_URL}`;
    rp(url);
});

module.exports = apiRoutes;