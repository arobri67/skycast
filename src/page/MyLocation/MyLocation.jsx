import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGeoLocation } from "../../context/LocationContext";
import Current from "./Current";
import Forecast from "./Forecast";
import UserLocation from "../../components/UserLocation";
import "./MyLocation.css";

const MyLocation = () => {
  const { setCity, citySelected } = useGeoLocation();

  useEffect(() => {
    setCity(null);
  }, [citySelected]);

  return (
    <>
      <UserLocation />
      <nav className="home-nav">
        <div className="nav-sublink-container">
          <NavLink
            to="/current"
            className="nav-sublink"
            activeclassname="active"
          >
            CURRENT WEATHER
          </NavLink>
          <NavLink
            to="/forecast"
            className="nav-sublink"
            activeclassname="active"
          >
            5-DAYS FORECAST
          </NavLink>
        </div>
      </nav>
      <section className="home">
        <Routes>
          <Route path="current" element={<Current />} />
          <Route path="forecast" element={<Forecast />} />
        </Routes>
      </section>
    </>
  );
};

export default MyLocation;
