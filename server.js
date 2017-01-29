// server.js


//======================= Setup =======================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;

//================== Configuration ====================
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//================== Routes ===========================
require('./app/routes')(app);


app.listen(port, () => {
	console.log('Server Started');
});
