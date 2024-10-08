const apiKey = "0835bd00d4d0ca357e3521e5671c089e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
            } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.svg";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.svg";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.svg";
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
        } if (data.weather[0].main == "Snow") {
            weatherImg.src = "images/snow.png";
        } if (data.weather[0].main == "Haze") {
            weatherImg.src = "images/haze.png";
        } 
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        

    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { 
        searchBtn.click();
    }
});