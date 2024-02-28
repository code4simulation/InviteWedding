var latitude = 37.515983;
var longitude = 127.0995839;
var zoom = 17.5;
var mymap = L.map('map').setView([latitude, longitude], zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: zoom,
}).addTo(mymap);

// Add a marker for the wedding hall
var marker = L.marker([latitude, longitude]).addTo(mymap);
marker.bindPopup("<b>아펠가모 잠실</b>").openPopup();
