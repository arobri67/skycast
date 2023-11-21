import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGeoLocation } from "../../context/LocationContext";
import Current from "./Current";
import Forecast from "./Forecast";
import UserLocation from "../../components/UserLocation";
import "./MyLocation.css";

const MyLocation = () => {
  // Access the setCity and citySelected from LocationContext
  const { setCity, citySelected } = useGeoLocation();
  // Reset the city when citySelected changes
  useEffect(() => {
    setCity(null);
  }, [citySelected]);

  return (
    <>
      {/* Load user location component */}
      <UserLocation />
      {/* Navigation for Current and 5-Days Forecast */}
      <nav className="home-nav">
        <div className="nav-sublink-container">
          {/* Navigation link to Current Weather */}
          <NavLink
            to="/current"
            className="nav-sublink"
            activeclassname="active"
          >
            CURRENT WEATHER
          </NavLink>
          {/* Navigation link to 5-Days Forecast */}
          <NavLink
            to="/forecast"
            className="nav-sublink"
            activeclassname="active"
          >
            5-DAYS FORECAST
          </NavLink>
        </div>
      </nav>
      {/* Main content section with Routes for Current and Forecast */}
      <section className="home">
        <Routes>
          {/* Route for Current Weather */}
          <Route path="current" element={<Current />} />
          {/* Route for 5-Days Forecast */}
          <Route path="forecast" element={<Forecast />} />
        </Routes>
      </section>
    </>
  );
};

export default MyLocation;
