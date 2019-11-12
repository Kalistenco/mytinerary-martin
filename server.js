var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 5000;

router.get('/', function(req, res) {
    res.send('im the home page!');  
});

router.get('/test', function(req, res) {
    res.send('test ok');
});

app.use('/', router);