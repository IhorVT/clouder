/**
 * Created by TW on 18.07.2015.
 */
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
    defPos(pstn);
}
