# Weather App

This is a weather application that provides current weather information for any location around the world. Users can search for a city and view its current temperature, weather conditions, and forecasts.

## Live Demo
[Click here to use the Weather App](https://weather-app-kaif.netlify.app/)  


## Features
- Search for current weather by city name.
- Display temperature, humidity, wind speed, and weather conditions.
- Responsive design for mobile and desktop users.

## Technologies Used
- **HTML** for the structure.
- **CSS** for styling.
- **JavaScript** for functionality and API calls.
- **OpenWeather API** for fetching weather data.

## How to Use
1. Open the Weather App in your browser using the [live link](https://weather-app-kaif.netlify.app/).
2. Enter the name of a city in the search bar and press Enter.
3. The app will fetch and display the current weather information for the entered city.


## Using OpenWeather API

To fetch weather data, we utilize the OpenWeather API. Follow these steps to set it up:

1. **Sign Up for an API Key:**
   - Go to [OpenWeather](https://openweathermap.org/api).
   - Create an account and log in.
   - Navigate to the API section and generate your API key.

2. **API Endpoint:**
   - The base URL for the current weather data is:
     ```
     https://api.openweathermap.org/data/2.5/weather
     ```

3. **API Request:**
   - The API request must include:
     - The city name (or city ID)
     - Your API key
     - Optionally, units for temperature (standard, metric, imperial)

   - Example request URL:
     ```
     https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
     ```

4. **Handling API Response:**
   - The API will return a JSON response containing weather data such as temperature, humidity, wind speed, and a description of the weather conditions.
   - Example response structure:
     ```json
     {
       "weather": [
         {
           "id": 801,
           "main": "Clouds",
           "description": "few clouds",
           "icon": "02d"
         }
       ],
       "main": {
         "temp": 28.57,
         "feels_like": 29.56,
         "pressure": 1013,
         "humidity": 60
       },
       "wind": {
         "speed": 3.09,
         "deg": 180
       },
       "name": "City Name"
     }
     ```




