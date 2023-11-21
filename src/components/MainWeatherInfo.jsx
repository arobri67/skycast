import { useWeather } from "../context/WeatherContext";
import celsiusLogo from "../assets/celsius.svg";
import clearSky from "../assets/weather_icon/01.svg";
import fewClouds from "../assets/weather_icon/02.svg";
import scatteredClouds from "../assets/weather_icon/03.svg";
import brokenClouds from "../assets/weather_icon/04.svg";
import showerRain from "../assets/weather_icon/09.svg";
import rain from "../assets/weather_icon/10.svg";
import thunderstorm from "../assets/weather_icon/11.svg";
import snow from "../assets/weather_icon/13.svg";
import mist from "../assets/weather_icon/50.svg";
import "./MainWeatherInfo.css";

const MainWeatherInfo = () => {
  // Access userWeather from WeatherContext
  const { userWeather } = useWeather();

  // Function to get time and format it
  const getTime = () => {
    const today = new Date();
    const hours = today.getHours();
    let minutes = today.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} `;
  };

  // Function to format city name
  const getCityNameFormated = () => {
    if (userWeather.name.includes(",")) {
      const cityNameFormated =
        userWeather.name.split(", ")[1] + " " + userWeather.name.split(", ")[0];
      return `${cityNameFormated}`;
    } else {
      return `${userWeather.name}`;
    }
  };
  // Function to get the path for the icon matching the current weather
  const getBackgroundImg = () => {
    if (userWeather !== null) {
      const weatherCondition = userWeather.weather[0].icon;
      if (weatherCondition === "01d" || weatherCondition === "01n") {
        return clearSky;
      } else if (weatherCondition === "02d" || weatherCondition === "02n") {
        return fewClouds;
      } else if (weatherCondition === "03d" || weatherCondition === "03n") {
        return scatteredClouds;
      } else if (weatherCondition === "04d" || weatherCondition === "04n") {
        return brokenClouds;
      } else if (weatherCondition === "09d" || weatherCondition === "09n") {
        return showerRain;
      } else if (weatherCondition === "10d" || weatherCondition === "10n") {
        return rain;
      } else if (weatherCondition === "11d" || weatherCondition === "11n") {
        return thunderstorm;
      } else if (weatherCondition === "13d" || weatherCondition === "13n") {
        return snow;
      } else if (weatherCondition === "50d" || weatherCondition === "50n") {
        return mist;
      }
    }
  };

  return (
    <article className="main-info">
      <div className="current-card">
        <div className="temperature-weather">
          <div className="left-temp">
            <div className="temp">
              <h2>{Math.round(userWeather.main.temp)}</h2>
              <div className="celsius-icon-container">
                <img src={celsiusLogo} alt="celsius logo" />
              </div>
            </div>
            <div className="feels">
              Feels like: {Math.round(userWeather.main.feels_like)}ºC
            </div>
          </div>
          <div className="right-weather">
            <div className="weather-icon-container">
              <img src={getBackgroundImg()} alt={userWeather.weather[0].main} />
            </div>
          </div>
        </div>
        <h3 className="city">{getCityNameFormated()}</h3>
        <ul className="general-info">
          <li>{getTime()}</li>
          <li>|</li>
          <li>
            {userWeather.weather[0].description[0].toUpperCase() +
              userWeather.weather[0].description.slice(1)}
          </li>
          <li>|</li>
          <li>H: {Math.round(userWeather.main.temp_max)}ºC</li>
          <li>L: {Math.round(userWeather.main.temp_min)}ºC</li>
        </ul>
      </div>
    </article>
  );
};

export default MainWeatherInfo;
