const mongoose = require('mongoose');

const {Schema} = mongoose;

const plan = new Schema({
    title: String,
    tripDate: [Date],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Plan', plan);