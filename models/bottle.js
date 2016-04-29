'use strict';
module.exports = function(sequelize, DataTypes) {
  var bottle = sequelize.define('bottle', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bottle;
};