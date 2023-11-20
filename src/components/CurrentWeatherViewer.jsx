import { useWeather } from "../context/WeatherContext";
import MainWeatherInfo from "./MainWeatherInfo";
import "./CurrentWeatherViewer.css";

const CurrentWeatherViewer = () => {
  const { userWeather } = useWeather();
  //function to format unix time
  const formatUnixTime = (unixtime) => {
    const unixToTime = new Date(unixtime * 1000);
    const getMinutes = unixToTime.getMinutes();
    const getHours = unixToTime.getHours();
    return `${getHours}:${getMinutes}`;
  };
  return (
    <>
      {userWeather !== null ? (
        <>
          <MainWeatherInfo />
          <article className="current-weather">
            <div className="current-expanded-card">
              {" "}
              <div className="current-top">
                <h4>Current Weather</h4>
              </div>
              <div className="current-bottom">
                <ul>
                  <li>
                    <img
                      src="/src/assets/current_icon/sunrise.svg"
                      alt="sunrise"
                    />
                    <span>
                      Sunrise: {formatUnixTime(userWeather.sys.sunrise)}
                    </span>
                  </li>
                  <li>
                    <img
                      src="/src/assets/current_icon/sunset.svg"
                      alt="sunset"
                    />
                    <span>
                      Sunset: {formatUnixTime(userWeather.sys.sunset)}
                    </span>
                  </li>
                  <li>
                    <img
                      src="/src/assets/current_icon/humidity.svg"
                      alt="humidity"
                    />
                    <span>Humidity: {userWeather.main.humidity}%</span>
                  </li>
                  <li>
                    <img
                      src="/src/assets/current_icon/barometer.svg"
                      alt="pressure"
                    />
                    <span>Pressure: {userWeather.main.pressure}hPa</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="/src/assets/current_icon/fog.svg"
                      alt="visibility"
                    />
                    <span>Visibility: {userWeather.visibility / 1000}km</span>
                  </li>
                  <li>
                    <img
                      src="/src/assets/current_icon/cloud.svg"
                      alt="clouds"
                    />
                    <span>Clouds: {userWeather.clouds.all}%</span>
                  </li>
                  <li>
                    <img
                      src="/src/assets/current_icon/sunrise.svg"
                      alt="wind"
                    />
                    <span>
                      Wind: {userWeather.wind.speed}m.s<sup>-1</sup>
                    </span>
                  </li>
                  {/* in the doc we can get weather but i do not see it */}
                  {/* <li>
                    <img src="/src/assets/current_icon/rain.svg" alt="wind" />
                    {userWeather.rain &&
                    userWeather.rain["3h"] !== undefined ? (
                      <span>Rain: {userWeather.rain["3h"]}mm</span>
                    ) : (
                      <span>Rain: 0mm</span>
                    )}
                  </li> */}
                </ul>
              </div>
            </div>
          </article>
        </>
      ) : null}
    </>
  );
};

export default CurrentWeatherViewer;
