// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var session = require('express-session');

// var tweetCtrl = require('./controllers/tweet');
var db = require('./models');

var app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/static'));
app.use(session({
  secret: 'dsalkfjasdflkjgdfblknbadiadsnkl',
  resave: false,
  saveUninitialized: true
}));

// app.use('/tweets', tweetCtrl);

app.use(flash());


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/auth/signup', function(req, res) {
  res.render('signup', {alerts: req.flash()});
});

app.post('/auth/signup', function(req, res) {
  console.log(req.body);
  db.user.findOrCreate({
    where: {
      username: req.body.username,
    },
    defaults: {
      password: req.body.password
    }
  }).spread(function(user, isNew) {
    if (isNew) {
      res.redirect('/saves');
    } else {
      req.flash('danger', 'Username already taken. Please choose another.')
      res.redirect('/auth/signup');
    }
  }).catch(function(err) {
    res.send(err);
  });
});

app.get('/auth/login', function(req, res) {
  res.render('signup');
});

app.post('/auth/login', function(req, res) {
  // just return all of the form data to the client for now.
  res.render('login');
});

/* ABOUT SECTION */

app.get('/about', function(req, res) {
  res.render('about');
});


/*SAVES PAGE */

app.get('/saves', function(req, res) {
  res.render('saves');
});




var port = 3000;
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});