const mongoose = require('mongoose');
const citySchema = require('../schemas/citySchema');

const City = mongoose.model('city', citySchema);

module.exports = City;