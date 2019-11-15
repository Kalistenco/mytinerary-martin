var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 5000;
var cors = require('cors');

app.use(cors());

router.get('/', function (req, res) {
    res.send('im the home page!');
});

router.get('/test', function (req, res) {
    res.send('test ok');
});

app.use('/', router);

app.listen(port, function () {
    console.log("el puerto 5000 esta andando")
})

var mongoose = require('mongoose');
var cityModel = require('./City')

router.get('/cities/all', function (req, res) {
    mongoose.connect('mongodb+srv://martink:1234@mytinerarycluster-dtydu.mongodb.net/myTinerary?retryWrites=true&w=majority', 
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            cityModel.find()
                .then(cities => res.send(cities))   
        })
        .catch(err => console.log(err))
})

        