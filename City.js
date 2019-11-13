var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var citySchema = new Schema({
    country: String,
    city: String
});

module.exports = mongoose.model('cities', citySchema);
