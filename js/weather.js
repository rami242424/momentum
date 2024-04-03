function onGeoOk(position){
    // console.log(position); 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in ",  lat, lon);
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);