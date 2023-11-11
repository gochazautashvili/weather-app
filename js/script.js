const apiKey = "f4b1bd843dffc0c1a026ca6d37cce385";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__button');
const weatherImg = document.querySelector('.weather__img img')

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        alert("this country is not founded")
    }

    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main == "Clear"){
        weatherImg.src = 'img/clear.png'
    }else if(data.weather[0].main == "Rain"){
        weatherImg.src = 'img/rein.png'
    }else if(data.weather[0].main == "Clouds"){
        weatherImg.src = 'img/drizzle.png'
    }else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = 'img/clear.png'
    }else if(data.weather[0].main == "Mist"){
        weatherImg.src = 'img/mist.png'
    }else if(data.weather[0].main == "Fog"){
        weatherImg.src = 'img/fog.png'
    }else if(data.weather[0].main == "Snow"){
        weatherImg.src = 'img/snow.png'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
