const mongoose = require('mongoose');

const {Schema} = mongoose;

const auth = new Schema({username: String, password: String, email: String});

module.exports = mongoose.model('Auth', auth);