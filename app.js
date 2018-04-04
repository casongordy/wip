

function displayStadiumWeather() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
      
   
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC_aD15ohiS9OWIF8oZN2_qjzYLUuCnvU&callback=initMap">
   




  // queryURL is the url we'll use to query the API
  var googleMap = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  // add the api key parameter (the one we received when we registered)
  queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  // grab text the user typed into the search input, add as parameter to url
  var searchTerm = $("#search-term").val().trim();
  queryURL += "&q=" + searchTerm;

  // if the user provides a startYear, include it in the queryURL
  var startYear = $("#start-year").val().trim();

  if (parseInt(startYear)) {
    queryURL += "&begin_date=" + startYear + "0101";
  }
