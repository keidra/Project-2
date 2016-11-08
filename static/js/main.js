jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src =
        "http://maps.google.com/maps/api/js?key=AIzaSyCrT3pkxZKknnB90gf4MnYBwrl6xbx8f-s&sensor=true&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
        var map;
        var bounds = new google.maps.LatLngBounds();
        var mapOptions = {
            mapTypeId: 'roadmap'    
        };
        // Display a map on the page
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        map.setTilt(45);
        // Multiple Markers
        var markers = [
            ['Seattle, Washington', 47.6062095, -122.3320708],
            ['Redmond, Washington', 47.6740, -122.1215],
            ['Bellevue, Washington', 47.6104, -122.2007],
            ['Renton, Washington', 47.4829, -122.2171],
            ['Bothell, Washington', 47.7623, -122.2054], 
            ['Kent, Washington', 47.3809, -122.2348],
            ['Tacoma, Washington', 47.2529, -122.4443]
        ];
        // Info Window Content
        var infoWindowContent = [
            ['<div class="info_content">' + '<h3>Seattle</h3>' +
                '<p>Report Year: 2014 <br> <br> <img src="reports/SEATTLE.jpg"><a href="http://www.seattle.gov/util/cs/groups/public/@spu/@water/documents/webcontent/1_039275.pdf">Click Here to view full report!</a></p>' +
                '</div>'
            ],
            ['<div class="info_content">' + '<h3>Redmond</h3>' +
                '<p>Report Year: 2014 </strong><br> <br> <img src="reports/REDMOND.jpg"><a href="http://www.redmond.gov/common/pages/UserFile.aspx?fileId=129718">Click Here to view full report!</a></p>' +
                '</div>'
            ],
            ['<div class="info_content">' + '<h3>Bellevue</h3>' +
                '<p>Current Report Year: 2014 <br> <br> <img src="reports/BELLEVUE.jpg"> <a href="http://www.ci.bellevue.wa.us/pdf/Utilities/WQR2015_WEB.pdf">Click Here to view full report!</a></p>' +
                '</div>'
            ],
            ['<div class="info_content">' + '<h3>Renton</h3>' +
                '<p>Current Report Year: 2014 <br> <br> <img src="reports/RENTON.jpg"> <a href="http://www.rentonwa.gov/uploadedFiles/Living/PW/UTILITIES/WATER/WaterQualityReports/2015waterqualityreport.pdf">Click Here to view full report!</a></p>' +
                '</div>'
            ],
            ['<div class="info_content">' + '<h3>Bothell</h3>' +
                '<p>Current Report Year: 2014 <br> <br> <img src="reports/BOTHELL.jpg"><a href="http://www.ci.bothell.wa.us/Site/Content/Public%20Works/Water_Sewer/WQReport_2015.pdf">Click Here to view full report!</a></p>' +
                '</div>'
            ], 
            ['<div class="info_content">' + '<h3>Kent</h3>' +
                '<p>Current Report Year: 2014 <br> <br> <img src="reports/KENT.jpg"><a href="http://kentwa.gov/WaterQualityReport/">Click Here to view full report!</a></p>' +
                '</div>'
            ],
            ['<div class="info_content">' + '<h3>Tacoma</h3>' +
                '<p>Current Report Year: 2014 <br> <br> <img src="reports/TACOMA.jpg"><a href="https://www.mytpu.org/file_viewer.aspx?id=54632">Click Here to view full report!</a></p>' +
                '</div>'
            ]
        ];
        // Display multiple markers on a map
        var infoWindow = new google.maps.InfoWindow(),
            marker, i;
        // Loop through our array of markers & place each one on the map  
        for (i = 0; i < markers.length; i++) {
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
                    infoWindow.setContent(infoWindowContent[i][
                        0
                    ]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));
            // Automatically center the map fitting all markers on the screen
            map.fitBounds(bounds);
        }
        // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
        var boundsListener = google.maps.event.addListener((map),
            'bounds_changed', function(event) {
                this.setZoom(9);
                google.maps.event.removeListener(boundsListener);
            });
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


// $(window).on("scroll", function() {
//     var s = 200 - Math.min(200, $(document).scrollTop());
//     $("img").width(s).height(s);
// });