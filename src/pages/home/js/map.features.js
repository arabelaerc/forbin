import L from 'leaflet';

let map;
let currentLayerGroup = null;

export function initMap() {
  map = L.map('map').setView([-38.4161, -63.6167], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

export function showPoints(points) {
  if (currentLayerGroup) {
    map.removeLayer(currentLayerGroup);
  }

  currentLayerGroup = L.layerGroup();

  points.forEach(({ lat, lng, title }) => {
    const marker = L.marker([lat, lng]).bindPopup(title);
    currentLayerGroup.addLayer(marker);
  });

  currentLayerGroup.addTo(map);

  if (points.length > 0) {
    const group = L.featureGroup(currentLayerGroup.getLayers());
    map.fitBounds(group.getBounds(), { padding: [20, 20] });
  }
}

if (map) {
  fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
    .then(response => response.json())
    .then(data => {
      const argentina = data.features.find(
        feature => feature.properties.ADMIN === "Argentina"
      );
  
      L.geoJSON(argentina, {
        style: {
          color: "#2c3e50",
          weight: 1,
          fillColor: "#2980b9",
          fillOpacity: 0.3
        }
      }).addTo(map);
  });
}