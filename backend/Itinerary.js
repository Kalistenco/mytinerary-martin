var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var intinerarySchema = new Schema({
    title: String,
    profilePicture: String,
    rating: Number,
    duration: Number,
    price: Number,
    hastags: Array,
    cityName: String
});

module.exports = mongoose.model('itineraries', intinerarySchema);

