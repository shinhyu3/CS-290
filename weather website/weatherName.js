var apiKey = 'API KEY GOES HERE';

document.addEventListener('DOMContentLoaded', bindButtons);
    
    function bindButtons() {
      document.getElementById('nameSubmit').addEventListener('click', function(event)
        {
            var req = new XMLHttpRequest();
            var payload = {cityName:null};
            payload.cityName = document.getElementById('cityName').value;            
            req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+payload.cityName+',us&appid=' + apiKey, true);
            req.addEventListener('load', function(){
                if(req.status >= 200 && req.status < 400){
                    var response = JSON.parse(req.responseText);
                    document.getElementById('weatherInfo').textContent = req.responseText;
                    var response = JSON.parse(req.responseText);
                    document.getElementById('humidity').textContent = response.main.humidity;
                    document.getElementById('temperature').textContent = response.main.temp;
                    event.preventDefault();
                } else {
                    console.log("Error in network request: " + req.statusText);
                }});
                req.send(JSON.stringify(payload));
                event.preventDefault();
        })
    }
