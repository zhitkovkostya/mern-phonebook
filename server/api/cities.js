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
    postCity(req, res, next) {
        City.findOneAndUpdate({name: req.body.name}, req.body, {upsert: true, new: true})
            .then(city => {
                res.send(city);
            });
    },
};