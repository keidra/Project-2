'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
   var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: {
      type:DataTypes.STRING,
      validate: {
        len: [8, 99]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
     authenticate: function(username, password, callback) {
      console.log(username);
    this.find({
      where: {username: username}
    }).then(function(user) {
      if (!user) callback(null, false);
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) return callback(err);
        callback(null, result ? user : false);
      });
    }).catch(callback);

  }
},
    hooks: {
      beforeCreate: function(user, options, callback) {
        // if the user gave a password then hash it
        if (user.password) {
          // hash the plaintext password before saving.
          bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) return callback(err);
            user.password = hash;
            callback(null, user);
          });
        // the user didn't provide a password
        } else {
          callback(null, user);
        }
      }
    }
    });
  return user;
};