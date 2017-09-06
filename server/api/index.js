const express = require('express');
const contacts = require('./contacts');
const cities = require('./cities');

// initialize express router
let router = express.Router();

// set contacts endpoints
router.route('/contacts')
    .get(contacts.getContacts)
    .post(contacts.postContact);

// set cities endpoints
router.route('/cities')
    .get(cities.getCities)
    .post(cities.postCity);
router.route('/cities/:id')
    .get(cities.getCityById);


module.exports = router;