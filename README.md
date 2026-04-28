🌤 Weather App

A simple weather application that allows users to enter a city name and get current weather details along with a 7-day forecast using the Weather API.

🚀 Features
🌍 Search weather by city name
🌡 Displays current temperature
💧 Shows humidity details
🌬 Wind speed information
🔵 Pressure data
📅 7-day weather forecast
⚡ Simple and fast user interface

🛠 Tech Stack
HTML
CSS
JavaScript
Weather API (World Weather Online)

📂 Project Structure
weather-app/
│── index.html
│── style.css
│── script.js
│── README.md

⚙️ How It Works
User enters a city name
Application sends a request to the Weather API
API returns weather data in JSON format
JavaScript processes the data
Weather details are displayed on the webpage, including:
- Current temperature
- Weather condition
- Humidity, wind speed, and pressure
- 7-day forecast

🔑 API Setup

This project uses the World Weather Online API.

Update your API key in script.js:

const apiKey = "YOUR_API_KEY";
API Endpoint Used
https://api.worldweatheronline.com/premium/v1/weather.ashx

💡 Conclusion

This project demonstrates how to fetch real-time data from an API and display it dynamically using JavaScript, along with building a clean and responsive user interface.
