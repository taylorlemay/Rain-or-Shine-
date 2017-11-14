// Default location (area code or city, state – in quotes)
var lc = "Providence, RI";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
 


    html = '<main>';
   
    html += '<section class="today">';
      html += '<div class="first">';
        html += '<img src="img/logo.svg">';  
        html += '<h1 class="wdata-01">'+weather.city+', '+weather.region+'</h1>';
      html += '</div>';

      html += '<div class="second">';
        html += '<div class="left">';
          html += '<i class="icon icon-'+weather.code+'"></i>';
        html += '</div>';
        
        html += '<div class="right">';
          html += '<h2 class="wdata-02"><span>now</span> '+weather.temp+'°'+'</h2>';
          html += '<h3 class="wdata-03">'+weather.currently+'</h3>';
        html += '</div>';
      html += '</div>';
        
      html += '<div class="third">';
        html += '<p class="wdata-04"><span>low</span> '+weather.low+'°'+'</p>';
        html += '<p class="wdata-05"><span>high</span> '+weather.high+'°'+'</p>';
      html += '</div>';

      html += '<div class="fourth">';
        html += '<p class="wdata-06"><span>humidity</span> '+weather.humidity+'%'+'</p>';
        html += '<p class="wdata-07"><span>heat index</span> '+weather.heatindex+'</p>';
      html += '</div>';
    html += '</section>';
    
    
    html += '<section class="tomorrow">';
      html += '<div class="first">';
        html += '<h1 class="wdata-08">Tomorrow: '+weather.forecast[1].day+'</h1>';
        html += '<h3 class="wdata-09">'+weather.forecast[1].text+'</h3>';
      html += '</div>';        

      html += '<div class="second">';
        html += '<div class="left">';
          html += '<p class="wdata-10"><span>low</span> '+weather.forecast[1].low+'°'+'</p>';          
        html += '</div>'; 

        html += '<div class="middle">';
          html += '<i class="icon icon-'+weather.code+'"></i>';        
        html += '</div>'; 

        html += '<div class="right">';
          html += '<p class="wdata-11"><span>high</span> '+weather.forecast[1].high+'°'+'</p>';
        html += '</div>'; 
      html += '</div>'; 
    html += '</section>';
    
    html += '</main>';

      





	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

