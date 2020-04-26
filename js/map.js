map = new L.Map('map');
var cartocdn = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
cartoAttrib = 'Carto geodatabase is good for this application';
carto = new L.TileLayer(cartocdn);
map.setView([51.5, 0.12], 2); // centered on London lat, long
map.addLayer(carto);

// add circles - Italy and Hubei are here as an example 

L.circle([30.9756, 112.2707], { color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 2971650 }).addTo(map).bindPopup('Hubei,China : 59433')
L.circle([41.8719, 12.5674], { color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 351200 }).addTo(map).bindPopup('Italy : 7024')
