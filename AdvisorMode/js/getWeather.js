/**
 * @author Uriana
 */

function getLocation() {
    var x = document.getElementById("showGeo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function showPosition(position) {
   
    loadWeather(position.coords.latitude+','+position.coords.longitude);

};

var weatherInfo = {};

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<img src='+weather.image+'></img>';
      html += '<ul><li>'+weather.title+'</li>';
      html += '<li>'+'city: '+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+'condition: '+weather.currently+'</li>';
      html += '<li>'+'temperature in C: '+weather.tempAlt+'&deg;C</li>';
      html += '<li>'+'high and low temp for the day: '+weather.high+'&deg;'+weather.units.temp+' to '+weather.low+'&deg;'+weather.units.temp+'</li>';
      html += '<li>'+'high and low temp for the day: '+weather.highAlt+'&deg;C'+' to '+weather.lowAlt+'&deg;C'+'</li>';
      html += '<li>'+'wind chill: '+weather.wind.chill+'&deg;'+'</li>';
      html += '<li>'+'wind direction: '+weather.wind.direction+'</li>';
      html += '<li>'+'wind speed: '+weather.wind.speed+' '+weather.units.speed+'</li>';
      html += '<li>'+'humidity: '+weather.humidity+'%'+'</li></ul>';
      
      weatherInfo.high = weather.high;
      weatherInfo.low = weather.low;

      var location = weather.city+', '+weather.region;
      var img = '<img style="height:150%;" src='+weather.image+'></img>';
      var high = weather.high+'&deg;';
      var low = weather.low+'&deg;';
      var current = weather.temp+'&deg;';
      $("#location").html(location);
      $("#weatherImg").html(img);
      $("#High").html(high);
      $("#Low").html(low);
      $("#current").html(current);    
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
};