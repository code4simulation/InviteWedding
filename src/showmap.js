var hall_name = "<b> 아펠가모 잠실 </b>";
var hall_lat  = 37.515983;
var hall_long = 127.0995839;
var c_lat  = 37.51475;
var c_long = 127.10030;
var zoom = 18;

var mymap = L.map('map').setView([c_lat, c_long], zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: zoom,
}).addTo(mymap);

// Add a marker for the wedding hall
var marker = L.marker([hall_lat, hall_long]).addTo(mymap);
marker.bindPopup(hall_name).openPopup();

// This ensures the map is displayed correctly after being initially hidden
mymap.on('load', function() {
  setTimeout(function() {
    mymap.invalidateSize();
  }, 400);
});
