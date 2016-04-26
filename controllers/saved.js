var express = require('express');
var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
  if(!req.currentUser) {
    req.flash('danger', 'You must be logged in to view this page.');
    res.redirect('/');
  }


  db.tweet.findAll({
    include: [db.user]
  }).then(function(saveds) {
    console.log(saveds);
    res.render('saved', {saved: saved, alerts: req.flash()});
  });
});

router.get('/new', function(req, res){
  res.render('post-save');
});

router.post('/', function(req, res){
  console.log(req.body);

  db.user.find({
    where: { username: req.currentUser.username}
  }).then(function(user) {
    user.createTweet({
      content: req.body.content
    }).then(function(tweet) {
      res.redirect('/saves');
    });
  }).catch(function(err) {
    res.send(err);
  });
});

module.exports = router;
