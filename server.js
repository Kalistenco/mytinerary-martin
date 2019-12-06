var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 5000;
var cors = require('cors');
var urlDB = "mongodb+srv://carellomartino:careCARE9900@mycluster-1o7tp.mongodb.net/MYtinerary?retryWrites=true&w=majority"
var urlDBold = "mongodb+srv://martink:1234@mytinerarycluster-dtydu.mongodb.net/myTinerary?retryWrites=true&w=majority"

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

mongoose.connect(urlDBold, 
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            console.log("connect mongodb") 
        })
        .catch(err => console.log(err))


router.get('/cities/all', function (req, res) {
    cityModel.find()
                .then(cities => res.send(cities))  
})

router.get('/cities/:name', function (req, res) {
    console.log("entro a la ruta")
    
            let cityRequested = req.params.name;
            console.log(cityRequested)
            cityModel.findOne({ city: cityRequested})
                .then(city => res.send(city))  
})

router.get('/itineraries/all', function (req, res) {
    
            intineraryModel.find()
                .then(itineraries => res.send(itineraries))
    
})
