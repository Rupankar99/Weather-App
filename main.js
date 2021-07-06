let city = document.getElementById('city');
let tempVal = document.querySelector('.temperature-value');
let weather = document.getElementById('weather');
let tempIcon = document.getElementById('temp-icon');
let country = document.getElementById('country');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind-speed');
let feelsLike = document.getElementById('temperature-feels-like-value');
let weatherDetails = document.getElementById('weather-details');
let pressure = document.getElementById('pressure');
let iconfile;

const searchbtn = document.getElementById('btn');
//const cityname = "Darjeeling";

//Fetch weather for current location

searchbtn.addEventListener('click',()=>{
    const inp = document.getElementById('inp').value;
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=877643a28f3d7e0ebb160e24bcfece98`;
    fetch(api).then(response =>{
        return response.json();
        }).then(data=>{
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country;
        weather.innerText = data.weather[0].main;
        tempVal.innerText = Math.round(data.main.feels_like-273);
        const icon = data.weather[0].icon;
        tempIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        humidity.innerText = `HUMIDITY: ${data.main.humidity}%`;
        let windspeed = Math.round((data.wind.speed * 18)/5);
        windSpeed.innerText = `WIND SPEED: ${windspeed}KM/HR`;
        feelsLike.innerText = `FEELS LIKE: ${Math.round(data.main.feels_like - 273)}`;
        weatherDetails.innerText = data.weather[0].description;
        pressure.innerText = `PRESSURE: ${data.main.pressure} hPa`; 
    });
});