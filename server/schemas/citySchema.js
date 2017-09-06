const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        required: [true, 'is required'],
    },
});

module.exports = citySchema;