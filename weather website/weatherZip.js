var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
      document.getElementById('zipCodeSubmit').addEventListener('click', function(event)
        {
            var req = new XMLHttpRequest();
            var payload = {cityZip:null};
            payload.cityZip = document.getElementById('cityZip').value;            
            req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip='+payload.cityZip+',us&appid=' + apiKey, true);
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
