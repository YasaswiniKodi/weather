 async function getWeather() {

    const city = document.getElementById("locationInput").value;

    if (!city) {
        alert("Enter city name");
        return;
    }

    const apiKey = "8e0011f596f24f24a8d103802262704";

    const url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${apiKey}&q=${city}&num_of_days=7&format=json`;

    try {

        const res = await fetch(url);
        const data = await res.json();

        if (!data.data) {
            alert("API error or invalid response");
            return;
        }

        // =========================
        // 🌍 CURRENT WEATHER
        // =========================
        const current = data.data.current_condition[0];

        const currentTemp = current.temp_C;
        const currentHumidity = current.humidity;
        const currentWind = current.windspeedKmph;
        const currentPressure = current.pressure;
        const currentCondition = current.weatherDesc[0].value;

      document.getElementById("city").innerHTML =
    `🌍 ${city.toUpperCase()}`;

document.getElementById("temp").innerHTML =
    `🌡 ${current.temp_C}°C`;

document.getElementById("desc").innerHTML =
    `☀️ ${current.weatherDesc[0].value}`;

document.getElementById("humidity").innerHTML = `
     ${current.humidity}%
`;

document.getElementById("wind").innerHTML = `
     ${current.windspeedKmph} km/h
`;

document.getElementById("pressure").innerHTML = `
     ${current.pressure} mb
`;

        // =========================
        // 📅 7 DAY FORECAST
        // =========================
        const weather = data.data.weather;
        const forecastDiv = document.getElementById("forecast");

        forecastDiv.innerHTML = "";

        weather.forEach(day => {

            // MAX / MIN TEMP
            const maxTemp = day.maxtempC;
            const minTemp = day.mintempC;

            // CONDITION (safe fallback)
            const condition =
                day.hourly?.[4]?.weatherDesc?.[0]?.value ||
                day.hourly?.[0]?.weatherDesc?.[0]?.value;

            // HUMIDITY / WIND (safe fallback)
            const humidity =
                day.hourly?.[4]?.humidity ||
                day.hourly?.[0]?.humidity;

            const wind =
                day.hourly?.[4]?.windspeedKmph ||
                day.hourly?.[0]?.windspeedKmph;

            // PRESSURE (fallback to current weather if missing)
            const pressure =
                currentPressure || "--";

            // =========================
            // UI OUTPUT
            // =========================
            forecastDiv.innerHTML += `
                <div class="day">

                    📅 <b>${day.date}</b><br><br>

                    🌡 Max: ${maxTemp}°C | 🌙 Min: ${minTemp}°C<br>

                    🌤 Condition: ${condition}<br>

                    💧 Humidity: ${humidity}%<br>

                    🌬 Wind: ${wind} km/h<br>

                    🔵 Pressure: ${pressure} mb

                </div>
            `;
        });

    } catch (err) {
        console.log(err);
        alert("Error fetching weather data");
    }
}