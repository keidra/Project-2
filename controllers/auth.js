var express = require('express');
var router = express.Router();
var db = require('../models');
router.get('/logout', function(req, res) {
    req.currentUser = false;
    res.locals.currentUser = false;
    res.redirect('/');
});
router.post('/signin', function(req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    console.log('sign in', user);
    db.user.authenticate(user, pass, function(err, user) {
        if (user) {
            req.session.userId = user.id;
            req.flash('success', 'Successfully logged in.');
            res.redirect('/');
        }
    });
});
router.get('/signup', function(req, res) {
    res.render('signup', {
        alerts: req.flash()
    });
});
router.post('/signup', function(req, res) {
    db.user.findOrCreate({
        where: {
            username: req.body.username,
        },
        defaults: {
            password: req.body.password
        }
    }).spread(function(user, isNew) {
        if (isNew) {
            res.redirect('/login');
        } else {
            req.flash('danger',
                'Username already taken. Please choose another.'
            )
            res.redirect('/auth/signup');
        }
    }).catch(function(err) {
        req.flash('danger', err.message);
        res.redirect('/auth/signup')
    });
});
module.exports = router;