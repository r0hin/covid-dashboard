function initMap() {

  var map;
  var marker;
  var infowindow = new google.maps.InfoWindow();
  window.index = 0

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid19-data.p.rapidapi.com/geojson-ww",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid19-data.p.rapidapi.com",
      "x-rapidapi-key": "f25776e273mshdeac69e2098339fp19fd7bjsne2f245613497"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: -33.872, lng: 151.252},
    });

    map.data.addGeoJson(response)

    map.data.addListener('click', function(event) {
      var feat = event.feature;
      var html = "<b>" +feat.getProperty('name') + "</b><br>" + event.feature.getProperty('active') + ' Active Cases<br>' + event.feature.getProperty('deaths') + ' Deaths<br>' + event.feature.getProperty('recovered') + ' Recovered'
      infowindow.setContent(html);
      infowindow.setPosition(event.latLng);
      infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
      infowindow.open(map);
   });


  });
  


}

