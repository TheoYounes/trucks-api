const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const positionSchema = new Schema({
    latitude: {type: String, required: true},
    longitude: {type: String, required: true}
});
const citySchema = new Schema({
    name: {type: String, required: true},
    ressources: {type: Number},
    position: positionSchema,
});

const City = mongoose.model('City', citySchema);

module.exports = {
    City
};
