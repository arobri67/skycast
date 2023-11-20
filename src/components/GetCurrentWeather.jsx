import axios from "axios";
import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { useGeoLocation } from "../context/LocationContext";
import mockDataUserLoc from "../DATA/mockDataUserLoc";

const GetCurrentWeather = () => {
  const { userLocation } = useGeoLocation();
  const { setWeather, userWeather } = useWeather();
  //very important to use ``
  const OPEN_WEATHER_API_KEY = `80e3049067db3b72e7e3e9aa3c545a26`;
  const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

  const getData = async () => {
    try {
      const { data } = await axios.get(API_BASE_URL);
      setWeather(data);
      // setWeather(mockDataUserLoc);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [userLocation]);
  console.log(userWeather);
  return null;
};

export default GetCurrentWeather;
