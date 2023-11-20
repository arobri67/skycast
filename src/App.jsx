import "./App.css";
import MyLocation from "./page/MyLocation/MyLocation";
import OtherCities from "./page/OtherCities/OtherCities";
import { NavLink, Route, Routes } from "react-router-dom";
import { useWeather } from "./context/WeatherContext";

function App() {
  const { userWeather } = useWeather();

  //function to dynamically reasign the background image based on the weather
  const getBackgroundImg = () => {
    if (userWeather !== null) {
      const weatherCondition = userWeather.weather[0].main;
      if (weatherCondition === "Clear") {
        return { backgroundImage: `url("/img/clearsky.jpg")` };
      } else if (weatherCondition === "Rain") {
        return { backgroundImage: `url("/img/rain.jpg")` };
      } else if (weatherCondition === "Snow") {
        return { backgroundImage: `url("/img/snow.jpg")` };
      } else if (weatherCondition === "Thunderstorm") {
        return { backgroundImage: `url("/img/thunderstorm.jpg")` };
      } else if (weatherCondition === "Clouds") {
        return { backgroundImage: `url("/img/cloud.jpg")` };
      } else if (
        weatherCondition === "Mist" ||
        weatherCondition === "Smoke" ||
        weatherCondition === "Haze" ||
        weatherCondition === "Dust" ||
        weatherCondition === "Fog" ||
        weatherCondition === "Sand" ||
        weatherCondition === "Ash" ||
        weatherCondition === "Squall" ||
        weatherCondition === "Tornado"
      ) {
        return { backgroundImage: `url("/img/mist.jpg")` };
      }
    }
  };
  return (
    <>
      <div id="container" style={getBackgroundImg()}>
        <header>
          <div className="logo-container">
            <div className="img-container">
              <img src="/logo.svg" alt="skycast logo" />
            </div>
            <h1>SkyCast</h1>
          </div>
          <nav className="main-nav">
            <NavLink
              to="/current"
              className="nav-link"
              activeclassname="active"
            >
              MY LOCATION
            </NavLink>
            <NavLink
              to="/other-cities"
              className="nav-link"
              activeclassname="active"
            >
              OTHER CITIES
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<MyLocation />} />
            <Route path="/other-cities/*" element={<OtherCities />} />
          </Routes>
        </main>
        <footer>
          <ul className="footer-info">
            <li>SkyCast</li>
            <li>-</li>
            <li>Made by Arnaud</li>
            <li>-</li>
            <li>
              <a href=""> View on GitHub</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
