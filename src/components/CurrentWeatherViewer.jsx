import { useWeather } from "../context/WeatherContext";
import MainWeatherInfo from "./MainWeatherInfo";
import barometer from "../assets/card_icon/barometer.svg";
import cloud from "../assets/card_icon/cloud.svg";
import fog from "../assets/card_icon/fog.svg";
import humidity from "../assets/card_icon/humidity.svg";
import sunrise from "../assets/card_icon/sunrise.svg";
import sunset from "../assets/card_icon/sunset.svg";
import windy from "../assets/card_icon/windy.svg";
import "./CurrentWeatherViewer.css";

const CurrentWeatherViewer = () => {
  // Access userWeather from WeatherContext
  const { userWeather } = useWeather();
  // Function to format Unix time
  const formatUnixTime = (unixtime) => {
    const unixToTime = new Date(unixtime * 1000);
    const getMinutes = unixToTime.getMinutes();
    const getHours = unixToTime.getHours();
    return `${getHours}:${getMinutes}`;
  };
  return (
    <>
      {/* Display the content only if userWeather is available */}
      {userWeather !== null ? (
        <>
          {/* Display MainWeatherInfo component */}
          <MainWeatherInfo />
          {/* Additional weather information */}
          <article className="current-weather">
            <div className="current-expanded-card">
              <div className="current-top">
                <h4>Current Weather</h4>
              </div>
              <div className="current-bottom">
                <ul>
                  <li>
                    <img src={sunrise} alt="sunrise icon" />
                    <span>
                      Sunrise: {formatUnixTime(userWeather.sys.sunrise)}
                    </span>
                  </li>
                  <li>
                    <img src={sunset} alt="sunset icon" />
                    <span>
                      Sunset: {formatUnixTime(userWeather.sys.sunset)}
                    </span>
                  </li>
                  <li>
                    <img src={humidity} alt="humidity icon" />
                    <span>Humidity: {userWeather.main.humidity}%</span>
                  </li>
                  <li>
                    <img src={barometer} alt="barometer icon" />
                    <span>Pressure: {userWeather.main.pressure}hPa</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={fog} alt="fog icon" />
                    <span>Visibility: {userWeather.visibility / 1000}km</span>
                  </li>
                  <li>
                    <img src={cloud} alt="cloud icon" />
                    <span>Clouds: {userWeather.clouds.all}%</span>
                  </li>
                  <li>
                    <img src={windy} alt="wind icon" />
                    <span>
                      Wind: {userWeather.wind.speed}m.s<sup>-1</sup>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </>
      ) : null}
      {/* Render nothing if userWeather is not available */}
    </>
  );
};

export default CurrentWeatherViewer;
