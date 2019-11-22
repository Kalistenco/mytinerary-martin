var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 5000;
var cors = require('cors');

app.use(cors());

router.get('/', function (req, res) {
    res.send('im the home page!');
});

app.use('/', router);

app.listen(port, function () {
    console.log("el puerto 5000 esta andando")
})

var mongoose = require('mongoose');
var cityModel = require('./backend/City');
var intineraryModel = require('./backend/Itinerary');

router.get('/cities/all', function (req, res) {
    mongoose.connect('mongodb+srv://martink:1234@mytinerarycluster-dtydu.mongodb.net/myTinerary?retryWrites=true&w=majority', 
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            cityModel.find()
                .then(cities => res.send(cities))   
        })
        .catch(err => console.log(err))
})

router.get('/itineraries/all', function (req, res) {
    mongoose.connect('mongodb+srv://martink:1234@mytinerarycluster-dtydu.mongodb.net/myTinerary?retryWrites=true&w=majority', 
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            intineraryModel.find()
                .then(itineraries => res.send(itineraries))
        })
        .catch(err => console.log(err))
})

        