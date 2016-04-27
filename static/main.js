// var initMap = function() {

//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 10
//   });

//   // if brower support available, ask user for location data and set the map view
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       map.setCenter(initialLocation);
//     });
//   }

// };
// function initMap() {
//   var myLatLng = {lat: 47.6062095, lng: -122.3320708};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: myLatLng
//   });

//    var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Seattle</h1>'+
//       '<div id="bodyContent">'+
//       '<p><b>Current Report:</b>2014<b></b>' +
//       '<p><a href="#">Click to access report!</a>'+
//       '</div>'+
//       '</div>';

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Seattle'
//   });
//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
// }



jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Seattle, Washington', 47.6062095,-122.3320708],
        ['Redmond, Washington', 47.6740,-122.1215],
        ['Bellevue, Washington', 47.6104,-122.2007], 
        ['Renton, Washington', 47.4829,-122.2171]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Seattle</h3>' +
        '<p>The London Eye is a giant Ferris s 135 metres (443 ft)</p>' +'</div>'],
        ['<div class="info_content">' +
        '<h3>Redmond</h3>' +
        '<p>The Palace of Westminster is the meeting place of Parliament after its tenants.</p>' +
        '</div>'], 
        ['<div class="info_content">' +
        '<h3>Bellevue</h3>' +
        '<p>The Palace of Westminster is the meeting  the Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Renton</h3>' +
        '<p>The Palace of Westminster is the meeting  the Parliament after its tenants.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(10);
        google.maps.event.removeListener(boundsListener);
    });
    
}


















$(function() {
  // Setup drop down menu
  $('.dropdown-toggle').dropdown();
 
  // Fix input element click problem
  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });
});


