 # 🌤 Weather App

A simple weather application that allows users to enter a city name and get **current weather details along with a 7-day forecast** using the World Weather Online API.

---

## 🚀 Features

- 🌍 Search weather by city name
- 🌡 Display current temperature
- 💧 Show humidity details
- 🌬 Display wind speed
- 🔵 Show pressure data
- 📅 7-day weather forecast
- ⚡ Simple and fast user interface

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript
- Weather API (World Weather Online)

---

## 📂 Project Structure

```
weather-app/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## ⚙️ How It Works

1. User enters a city name  
2. Application sends a request to the Weather API  
3. API returns weather data in JSON format  
4. JavaScript processes the data  
5. Weather details are displayed on the webpage, including:
   - Current temperature  
   - Weather condition  
   - Humidity, wind speed, and pressure  
   - 7-day forecast  

---

## 🔑 API Setup

This project uses the **World Weather Online API**.

Update your API key in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY";
```

### API Endpoint Used

```
https://api.worldweatheronline.com/premium/v1/weather.ashx
```

---

## 💡 Conclusion

This project demonstrates how to fetch real-time weather data from an API and display it dynamically using JavaScript, while building a clean and user-friendly interface.
