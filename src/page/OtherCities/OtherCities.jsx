import { NavLink, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OtherCitiesCurrent from "./OtherCitiesCurrent";
import OtherCitiesForecast from "./OtherCitiesForecast";
import CitySelection from "../../components/CitySelection";
import { useGeoLocation } from "../../context/LocationContext";
import { useEffect } from "react";
import "./OtherCities.css";
const OtherCities = () => {
  const { userLocation, setLocation } = useGeoLocation();
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
      <nav className="other-nav">
        <NavLink
          to="./other-current"
          className="nav-sublink"
          activeclassname="active"
        >
          CURRENT WEATHER
        </NavLink>
        <NavLink
          to="./other-forecast"
          className="nav-sublink"
          activeclassname="active"
        >
          5-DAYS FORECAST
        </NavLink>
        <CitySelection />
      </nav>
      <section className="other">
        <Routes>
          <Route path="other-current" element={<OtherCitiesCurrent />} />
          <Route path="other-forecast" element={<OtherCitiesForecast />} />
        </Routes>
      </section>
    </>
  );
};

export default OtherCities;
