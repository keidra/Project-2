function initMap() {
  
  var austin = {
    info: '<div> <h2 class="city">Austin, Texas</h2><br>\
          <a href="https://www.austintexas.gov/department/drinking-water-quality-report">Learn More!</a><br>\
          <img src="./reports/austin.jpg" class="img-responsive report"><br>\
          <div>',
    lat: 30.307182,
    long: -97.755996
  };

  var dallas = {
    info: '<strong>Chipotle on Belmont</strong><br>\
          1025 W Belmont Ave<br> Chicago, IL 60657<br>\
          <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 32.794176,
    long: -96.765503
  };

  var houston = {
    info: '<strong>Chipotle on Sheridan</strong><br>\r\
          6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
          <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
    lat: 29.780472,
    long: -95.386342
  };

  var locations = [
      [austin.info, austin.lat, austin.long, 0],
      [dallas.info, dallas.lat, dallas.long, 1],
      [houston.info, houston.lat, houston.long, 2],
    ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(30.307182, -97.755996),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}




    /* NAVBAR */
$(function() {
    // Setup drop down menu
    $('.dropdown-toggle').dropdown();
    // Fix input element click problem
    $('.dropdown input, .dropdown label').click(function(e) {
        e.stopPropagation();
    });
});


