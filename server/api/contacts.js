const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const City = require('../models/City');

module.exports = {
    getContacts(req, res, next) {
        Contact
            .find({})
            .then(contacts => {
                res.send(contacts);
            })
            .catch(next);
    },
    postContact(req, res, next) {
        City
            .findOneAndUpdate({name: req.body.cityName}, {name: req.body.cityName}, {upsert: true, new: true})
            .then(city => {
                req.body.city = city._id;
                
                Contact
                    .create(req.body)
                    .then(contact => {
                        res.send(contact);
                    });
            })
            .catch(next);
    },
    putContact(req, res, next) {
        City
            .findOneAndUpdate({name: req.body.cityName}, {name: req.body.cityName}, {upsert: true, new: true})
            .then(city => {
                req.body.city = city._id;
                
                delete req.body.cityName;
                
                Contact
                    .findByIdAndUpdate(req.body._id, req.body, {new: true, runValidators: true})
                    .then(contact => {
                        res.send(contact);
                    });
            })
            .catch(next);
    },
    deleteContact(req, res, next) {
        Contact
            .findByIdAndRemove(req.body._id)
            .then(contact => {
                res.send(contact);
            });
    }
};