var mymap = L.map('map').setView([info.center_lat, info.center_long], info.map_zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: info.map_zoom,
}).addTo(mymap);

// Add a marker for the wedding hall
var marker = L.marker([info.hall_lat, info.hall_long]).addTo(mymap);
marker.bindPopup(info.WeddingHall).openPopup();
