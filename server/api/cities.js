const mongoose = require('mongoose');
const City = require('../models/City');

module.exports = {
    getCities(req, res, next) {
        City
            .find({})
            .then(cities => {
                res.send(cities);
            })
            .catch(next);
    },
    getCityById(req, res, next) {
        City
            .findOne({_id: mongoose.Types.ObjectId(req.params.id)})
            .then(city => {
                res.send(city);
            })
            .catch(next);
    },
    postCity(req, res, next) {
        City.findOneAndUpdate({name: req.body.name}, req.body, {upsert: true, new: true})
            .then(city => {
                res.send(city);
            });
    },
};