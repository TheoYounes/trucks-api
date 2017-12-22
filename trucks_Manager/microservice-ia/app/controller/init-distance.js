const bluebird = require('bluebird');
const distance = bluebird.promisifyAll(require('google-distance'));
require('dotenv').config();
distance.apiKey = process.env.API_KEY_GOOGLE;


const {City} = require('../models/city');
const {Distance} = require('../models/distance');

const googleDistance = (depart, destination) => {
    return distance.getAsync({
        origin: `${depart}, France`,
        destination: `${destination}, France`
    });
};

const distances = async tab => {
    const tabTri = [...tab];
    const distances = [];
    for (let i = 0; i < tabTri.length - 1; i++) {
        for (let j = i+1; j < tabTri.length; j++) {
            const dist = (await googleDistance(tabTri[i][0],tabTri[j][0])).distanceValue;
            try {
                distances.push({
                    name: `${tabTri[i][0]}${tabTri[j][0]}`,
                    distance: dist
                });
            }catch(err) {

            }
        }
    }
    return distances;
};
const preproc = (cities) => {
    const tab = [];
    for (const key in cities) {
        if (Object.prototype.hasOwnProperty.call(cities, key)) {
            tab.push([key, cities[key]]);
        }
    }
    return tab;
};

const main = async () => {
    let reformatCities = {};
    let cities = await City.find({});
    for (let i = 0; i < cities.length; i++) {
        const key = cities[i].name;
        reformatCities[key] = cities[i].ressources;
    };
    const tab = preproc(reformatCities);
    const distancesCities = await distances(tab);
    distancesCities.map(dist => {
        return new Distance({
            name: dist.name,
            distance: dist.distance
        }).save();
    });
};
module.exports = {main};
