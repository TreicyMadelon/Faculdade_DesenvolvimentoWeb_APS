function Login() {
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="agenda.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "senha";
    } else {
        x.type = "password";
    }
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });

    
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var marker = new google.maps.Marker({
            position: pos,
             map: map
          });

          var marker = new google.maps.Marker({
            position:  {lat: -23.533773 , lng: -46.625290},
             map: map
          });

          var marker = new google.maps.Marker({
            position:  {lat: -25.441105 , lng: -49.276855	},
             map: map
          });
        
        map.setCenter(pos);
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
                          'Error: Geolocalização falhou.' :
                          'Error: Seu navegador não suporta geolocalização');
  }

  