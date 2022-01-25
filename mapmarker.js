function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2FycGNvcmVicmVhY2giLCJhIjoiY2t5OHc4M2ZqMDBrcDJ1cDg0dHY2azZlZSJ9.BJuegUOlua6CKLbYjF23Xg';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

let marker = new mapboxgl.Marker()
    .setLngLat([-71.091542,42.358862])
    .addTo(map);
  // TODO: add a marker to the map
}

// Do not edit the code below
window.onload = () => {
  createMapMarker();
};

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { createMapMarker };
}
