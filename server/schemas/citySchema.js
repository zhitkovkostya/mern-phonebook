const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        required: [true, 'is required'],
        unique: true,
    },
});

module.exports = citySchema;