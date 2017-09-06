const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'is required'],
    },
    lastName: {
        type: String,
        required: [true, 'is required'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'is required'],
    },
    email: {
        type: String,
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
    },
});

module.exports = contactSchema;