var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 10
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let szerokosc = position.coords.latitude;
        let dlugosc = position.coords.longitude;
      var pos = {
        lat: szerokosc,
        lng: dlugosc
      };

      let pointer; 

      document.addEventListener('keydown', (e) => {
          
          switch (e.keyCode) {
              case 38:
                  szerokosc += 0.02;
                  break;
              case 40:
                  szerokosc -= 0.02;
                  break;
              case 37:
                  dlugosc -= 0.02;
                  break;
              case 39:
                  dlugosc += 0.02;
                  break;
          }
      
          pointer.setPosition({ lat: szerokosc, lng: dlugosc });
      });
  

      infoWindow.setPosition(pos);
      infoWindow.setContent('Twoja lokalizacja');
      infoWindow.open(map);
      map.setCenter(pos);

      pointer = new google.maps.Marker({
          position: pos,
          map: map
      })

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Błąd: Usługa geolokalizacji jest niedostępna.' :
                        'Błąd: Twoja przeglądarka nie obsługuje geolokalizacji.');
  infoWindow.open(map);
}





