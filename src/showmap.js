// Variables for the URL and image source
var linksData = [
  {linkUrl: info.Naver, imageUrl: "./img/icon_NAVER-Map.png", altText: "NAVER Map", idLink: "naver-link"},
  {linkUrl: info.Google, imageUrl: "./img/icon_GOOGLE-Map.png", altText: "Google Map", idLink: "google-link"}
];

linksData.forEach(function(data) {
  var container = document.getElementById(data.idLink);
  var link = document.createElement('a');
  link.href = data.linkUrl;
  link.target = "_blank"; // Optional: opens the link in a new tab
  var image = document.createElement('img');
  image.src = data.imageUrl;
  image.alt = data.altText;
  link.appendChild(image);
  container.appendChild(link);
});

var mymap = L.map('map').setView([info.center_lat, info.center_long], info.map_zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: info.map_zoom,
}).addTo(mymap);

// Add a marker for the wedding hall
var marker = L.marker([info.hall_lat, info.hall_long]).addTo(mymap);
marker.bindPopup(info.WeddingHall).openPopup();
