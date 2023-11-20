import { useWeather } from "../context/WeatherContext";
import celsisusLogo from "../assets/celsius.svg";
import "./MainWeatherInfo.css";
const MainWeatherInfo = () => {
  const { userWeather } = useWeather();

  //function to get time and the minute
  const getTime = () => {
    const today = new Date();
    const hours = today.getHours();
    let minutes = today.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} `;
  };

  // function to convert city name when it is needed. (for example, the API will have Masnou, El; this function will convert it to El Masnou)
  const getCityNameFormated = () => {
    if (userWeather.name.includes(",")) {
      const cityNameFormated =
        userWeather.name.split(", ")[1] + " " + userWeather.name.split(", ")[0];
      return `${cityNameFormated}`;
    } else {
      return `${userWeather.name}`;
    }
  };
  //function to get the path for the icon matching the current weather
  const getWeatherIcon = (item) => {
    const reFormatIconName = item.slice(0, -1);
    return `../assets/weather_icon/${reFormatIconName}.svg`;
  };
  return (
    <article className="main-info">
      <div className="current-card">
        <div className="temperature-weather">
          <div className="left-temp">
            <div className="temp">
              <h2>{Math.round(userWeather.main.temp)}</h2>
              <div className="celsius-icon-container">
                <img src={celsisusLogo} alt="celsius logo" />
              </div>
            </div>
            <div className="feels">
              Feels like: {Math.round(userWeather.main.feels_like)}ºC
            </div>
          </div>
          <div className="right-weather">
            <div className="weather-icon-container">
              <img
                src={getWeatherIcon(userWeather.weather[0].icon)}
                alt={userWeather.weather[0].main}
              />
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
