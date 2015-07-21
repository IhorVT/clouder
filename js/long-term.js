/**
 * Created by TW on 21.07.2015.
 */


/*Function that makes JSON request*/
function defPosLong(pos) {
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast/daily?'+pos+'&units=metric&cnt=8';
    $.getJSON(weatherAPI, function (response) {
        localStorage.defaultWeather = JSON.stringify({
            timestamp: (new Date()).getTime(),	// getTime() returns milliseconds
            data: response
        });
        console.log(localStorage);
        loadDataLong();
    });
}

/*Function that parsing JSON response and filling out data on the index page*/
function loadDataLong(flag) {
    var cache = JSON.parse(localStorage.defaultWeather);
    console.log(cache);
    console.log(cache.data.city.name);
    if (flag === 'madeNew') {
        defPosLong('q=' + cache.data.city.name)
    }
    document.getElementById('cityTitle').innerHTML = cache.data.city.name + ', ' + cache.data.city.country;
}







/* Checking if weather forecast has been launched on this browser */
if(typeof localStorage.defaultWeather==='undefined'){
    defPosLong('q=Kiev'); //in case of first launch default location is Kiev
}else{
    loadDataLong('madeNew'); //in other case will pick last location and make request by that location
}


/*BUTTONS AND other stuff*/

/*Function that activates navigator*/
function currentPosition(){
    if (navigator.geolocation) {
        console.log('succes');
        navigator.geolocation.getCurrentPosition(locFinded);
    } else {
        document.getElementById('cityTitle').innerHTML="Geolocation API not supported by your browser.";
        console.log("fail");
    }
}

/*Function that preparing position data for transfer into json request function*/
function locFinded(position){
    console.log(position.coords.latitude, position.coords.longitude);
    var pstn='lat='+position.coords.latitude+'&lon='+position.coords.longitude;
    console.log(pstn);
    defPosLong(pstn);
}
