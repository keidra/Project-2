// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var session = require('express-session');
var db = require('./models');
var app = express();


var authCtrl = require('./controllers/auth');


app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/static'));

app.use(session({
  secret: 'dsalkfjasdflkjgdfblknbadiadsnkl',
  resave: false,
  saveUninitialized: true
}));


app.use(flash());

app.use(function(req, res, next) {
  if (req.session.userId) {
    db.user.findById(req.session.userId).then(function(user) {
      req.currentUser = user;
      res.locals.currentUser = user;
      next();
    })
  } else {
    req.currentUser = false;
    res.locals.currentUser = false;
    next();
  }
});

app.use('/auth', authCtrl);


app.get('/', function(req, res) {
  res.render('index', {alerts: req.flash()});
});


app.get('/searchresults', function(req, res) {
  var query = req.query.q;
  
});

// db.waterdata.findAll().then(function(locations) {
//   console.log(locations);
//   // users will be an array of all User instances
// });

/* ABOUT SECTION */

app.get('/about', function(req, res) {
  res.render('about');
});


/*SAVES PAGE */

app.get('/saves', function(req, res) {
  res.render('saves');
});

/* LOGIN LANDING PAGE */

app.get('/login', function(req, res) {
  res.render('login');
});

/* SEARCH */
app.get('/', function(req, res) {
  db.place.findAll().then(function(places) {
    res.render('index', {places});
  }).catch(function(err) {
    res.send({message: 'error', error: err});
  })
});

app.post('/places', function(req, res) {
  db.place.create({
    name: req.body.name,
    address: req.body.address
  }).then(function(place) {
    res.redirect('/');
  }).catch(function(err) {
    res.send({message: 'error', error: err});
  })
});



var port = 3000;
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});