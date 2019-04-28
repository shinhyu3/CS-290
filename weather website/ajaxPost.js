document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    document.getElementById('textSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {textSend:null};
        event.preventDefault();
        payload.textSend = document.getElementById('textSend').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('returnedText').textContent = response.json.textSend;
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}