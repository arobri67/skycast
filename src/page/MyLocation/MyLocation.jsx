import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Current from "./Current";
import Forecast from "./Forecast";
import UserLocation from "../../components/UserLocation";
import "./MyLocation.css";

const MyLocation = () => {
  // Automatically redirect to /current on the first visit
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/current");
  }, []);

  return (
    <>
      <UserLocation />
      <nav className="home-nav">
        <NavLink to="/current" className="nav-sublink" activeclassname="active">
          CURRENT WEATHER
        </NavLink>
        <NavLink
          to="/forecast"
          className="nav-sublink"
          activeclassname="active"
        >
          5-DAYS FORECAST
        </NavLink>
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
