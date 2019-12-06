var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var intinerarySchema = new Schema({
    title: String,
    city: String,
    country: String,
    userPhoto: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: Array,
    username: String
});

module.exports = mongoose.model('itineraries', intinerarySchema);

