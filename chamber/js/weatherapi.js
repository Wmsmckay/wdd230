const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=32.9211&lon=10.4509&units=imperial&appid=6f1295d458b9a2c5209776b7aa937528'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const temp = jsObject.main.temp.toFixed(0);
    const speed = jsObject.wind.speed;
    const description = jsObject.weather[0].description;
    const imgURL = `http://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`


    document.querySelector('#temp').textContent = temp;
    document.querySelector('#speed').textContent = speed;
    document.querySelector('#weatherIcon').setAttribute('src', imgURL);
    document.querySelector('#weatherIcon').setAttribute('alt', description);
    document.querySelector('#weather-description').textContent = description



    if(temp <= 50 && speed > 3) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16)
        document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;F`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }
  });

