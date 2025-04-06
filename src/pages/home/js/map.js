import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

let map;
let currentLayerGroup = null;

export function initMap() {
  map = L.map('map').setView([-38.4161, -63.6167], 5.5);
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
