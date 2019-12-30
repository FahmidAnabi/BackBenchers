// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 23.759953, lng: 90.357337 };
  // Centered Map on location
  const map = new google.maps.Map(document.querySelector(`.map`), {
    zoom: 14,
    center: loc
  });
  // the marker, positioned at location
  const marker = new google.maps.Marker({position:loc, map:map});
}
