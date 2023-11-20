import { useWeather } from "../context/WeatherContext";
import MainWeatherInfo from "./MainWeatherInfo";
import "./ForecastViewer.css";

const ForecastViewer = () => {
  const { userForecast, userWeather } = useWeather();

  //function to get the date for each 5 day of the forecast
  const getDateMonth = (unixtime) => {
    const unixToTime = new Date(unixtime * 1000);
    const date = unixToTime.getDate();
    const month = unixToTime.getMonth();
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
  //function get and format icon of the day
  const miniWeatherIcon = (icon) => {
    const iconName = icon.slice(0, -1);
    return `/src/assets/weather_icon/${iconName}.svg`;
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
                              src={miniWeatherIcon(item.weather[0].icon)}
                              alt={item.weather[0].main}
                            />
                          </div>
                        </div>
                        <div className="max-min-temp">
                          <span>H: {Math.round(item.main.temp_max)}ºC</span>
                          <span>L: {Math.round(item.main.temp_min)}ºC</span>
                        </div>
                        <div className="wind-rain">
                          <div className="wind">
                            <img
                              src="/src/assets/current_icon/cloud.svg"
                              alt="wind icon"
                            />
                            <span>{item.clouds.all}%</span>
                          </div>
                          <div className="rain">
                            <img
                              src="/src/assets/current_icon/rain.svg"
                              alt="rain icon"
                            />
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
