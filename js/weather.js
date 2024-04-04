const API_KEY = "09ccd72a24f2ae9530ae57fe5dbc6d21";

function onGeoOk(position){
    // console.log(position); 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("you live in ",  lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    // fetch(url); // url 부르기
    // -----
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {console.log(data.name, data.weather[0].main)
    // });
    // -----
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const weatherMain = data.weather[0].main; //
            weather.innerText = data.weather[0].main;
            weather.innerText = `${getWeatherEmoji(weatherMain)} ${data.weather[0].main} ${data.main.temp} º`;
           
    });
}

function onGeoError(){
    alert("Can't find your location. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// https://api.openweathermap.org/data/2.5/weather?lat=37.60082&lon=126.649615&appid=09ccd72a24f2ae9530ae57fe5dbc6d21&units=metric

function getWeatherEmoji(weatherMain) {
    switch (weatherMain) {
        case "Clear":
            return "☀️";
        case "Clouds":
            return "☁️";
        case "Rain":
            return "🌧️";
        case "Drizzle":
            return "🌧️";
        case "Thunderstorm":
            return "⛈️";
        case "Snow":
            return "❄️";
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
            return "🌫️";
        default:
            return "❓"; // 알 수 없는 날씨 상태의 기본 이모지
    }
}
