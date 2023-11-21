import { useWeather } from "../context/WeatherContext";
import MainWeatherInfo from "./MainWeatherInfo";
import clearSky from "../assets/weather_icon/01.svg";
import fewClouds from "../assets/weather_icon/02.svg";
import scatteredClouds from "../assets/weather_icon/03.svg";
import brokenClouds from "../assets/weather_icon/04.svg";
import showerRain from "../assets/weather_icon/09.svg";
import rain from "../assets/weather_icon/10.svg";
import thunderstorm from "../assets/weather_icon/11.svg";
import snow from "../assets/weather_icon/13.svg";
import mist from "../assets/weather_icon/50.svg";
import umbrella from "../assets/card_icon/rain.svg";
import cloud from "../assets/card_icon/cloud.svg";

import "./ForecastViewer.css";

const ForecastViewer = () => {
  const { userForecast, userWeather } = useWeather();
  //function to get the date for each 5 day of the forecast
  const getDateMonth = (unixtime) => {
    const unixToTime = new Date(unixtime * 1000);
    const date = unixToTime.getDate();
    const month = unixToTime.getMonth() + 1;
    return `${date}/${month}`;
  };
  //function to convert the date into "Today"
  const getDay = (unixtime) => {
    const options = { weekday: "short" };
    const todayDay = new Intl.DateTimeFormat("en-US", options).format(
      new Date()
    );
    const unixToTime = new Date(unixtime * 1000);
    let day = new Intl.DateTimeFormat("en-US", options).format(unixToTime);
    if (day === todayDay) {
      day = "Today";
    }
    return `${day}`;
  };
  //function to get the path for the icon matching the current weather
  const getMiniWeatherIcon = () => {
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
    <>
      {userWeather !== null && userForecast !== null ? (
        <>
          <MainWeatherInfo />
          <article className="forecast">
            <div className="forecast-card">
              <div className="forecast-top">
                <h4>5-day weather forecast</h4>
              </div>
              <div className="forecast-bottom">
                <ul>
                  {userForecast.list
                    .filter((item, index) => index % 8 === 0)
                    .map((item) => (
                      <li key={item.dt}>
                        <div className="forecast-date">
                          <span>{getDay(item.dt)}</span>
                          <span>{getDateMonth(item.dt)}</span>
                        </div>
                        <div className="mini-weather-icon">
                          <div className="mini-icon-container">
                            <img
                              src={getMiniWeatherIcon()}
                              alt={item.weather[0].main}
                            />
                          </div>
                        </div>
                        <div className="max-min-temp">
                          <span>H: {Math.round(item.main.temp_max)}ºC</span>
                          <span>L: {Math.round(item.main.temp_min)}ºC</span>
                        </div>
                        <div className="cloud-rain">
                          <div className="cloud">
                            <img src={cloud} alt="cloud icon" />
                            <span>{item.clouds.all}%</span>
                          </div>
                          <div className="rain">
                            <img src={umbrella} alt="rain icon" />
                            {item.rain && item.rain["3h"] !== undefined ? (
                              <div>{item.rain["3h"]}mm</div>
                            ) : (
                              <div>0mm</div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </article>
        </>
      ) : null}
    </>
  );
};

export default ForecastViewer;
