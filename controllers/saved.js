var express = require('express');
var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
  if(!req.currentUser) {
    req.flash('danger', 'You must be logged in to view this page.');
    res.redirect('/');
  }

  db.save.findAll({
    include: [db.user]
  }).then(function(saveds) {
    console.log(saves);
    res.render('saved', {saved: saved, alerts: req.flash()});
  });
});

router.get('/new', function(req, res){
  res.render('post-save');
});

router.post('/', function(req, res){
  console.log(req.body);
});
module.exports = router;
