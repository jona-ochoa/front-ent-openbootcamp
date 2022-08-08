let marker, map, madrid, terminal;
function initMap() {

  const posicion = { lat: -25.363, lng: 131.044 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: posicion,
    zoom: 4,
  })
  const marker = new google.maps.Marker({
    position: {lat: -30.9827011, lng: -64.0906037},
    map,
    title: 'Mi Ciudad'
  })

  const terminal = new google.maps.Marker({
    position: {lat: -30.9806794, lng:-64.0944535},
    map,
    title: 'Terminal de Jesus Maria'
  })

  const madrid = new google.maps.Marker({
    position: {lat: 40.4057143, lng: -3.685944},
    map,
    title: 'Madrid'
  })

}
