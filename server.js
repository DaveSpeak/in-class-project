// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var firebase = require("firebase");

//firebase
var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "fbKey.json",
  databaseURL: 'https://hot-restaurant.firebaseio.com/'
});
var db = firebase.database();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to serve static files
app.use(express.static(path.join(__dirname, 'app/public')));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//routes

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.get('/reservation', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/reserveration.html'));
});

app.get('/api/tables', function(req, res) {
    var tables = [];
    db.ref('tables').once("value", function(snapshot) {
        snapshot.forEach(function(snap) {
            tables.push(snap.val());
        });
        res.send(tables);
    });
});

app.post('/api/new', function(req, res) {
    console.log(req.body);
    var reservation = req.body;
    db.ref('tables').push(reservation);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/404/404.html'));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
