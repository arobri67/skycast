import { NavLink, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGeoLocation } from "../../context/LocationContext";
import { useEffect } from "react";
import OtherCitiesCurrent from "./OtherCitiesCurrent";
import OtherCitiesForecast from "./OtherCitiesForecast";
import CitySelection from "../../components/CitySelection";
import "./OtherCities.css";

const OtherCities = () => {
  // Access setLocation from LocationContext
  const { setLocation } = useGeoLocation();
  // Reset userLocation and navigate to the default route on component mount
  const navigate = useNavigate();
  useEffect(() => {
    setLocation({
      latitude: null,
      longitude: null,
    });
    navigate(`/other-cities/other-current`);
  }, []);
  return (
    <>
      {/* Navigation section for other cities */}
      <nav className="other-nav">
        <div className="nav-sublink-container">
          {/* Navigation link to Other Cities Current Weather */}
          <NavLink
            to="./other-current"
            className="nav-sublink"
            activeclassname="active"
          >
            CURRENT WEATHER
          </NavLink>
          {/* Navigation link to Other Cities 5-Days Forecast */}
          <NavLink
            to="./other-forecast"
            className="nav-sublink"
            activeclassname="active"
          >
            5-DAYS FORECAST
          </NavLink>
          {/* Component for selecting a city */}
          <CitySelection />
        </div>
      </nav>
      {/* Main content section with Routes for Other Cities Current and Forecast */}
      <section className="other">
        <Routes>
          {/* Route for Other Cities Current Weather */}
          <Route path="other-current" element={<OtherCitiesCurrent />} />
          {/* Route for Other Cities 5-Days Forecast */}
          <Route path="other-forecast" element={<OtherCitiesForecast />} />
        </Routes>
      </section>
    </>
  );
};

export default OtherCities;
