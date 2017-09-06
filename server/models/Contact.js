const mongoose = require('mongoose');
const contactSchema = require('../schemas/contactSchema');

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;