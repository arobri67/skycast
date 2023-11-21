import axios from "axios";
import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { useGeoLocation } from "../context/LocationContext";

const GetCurrentWeather = () => {
  // Access userLocation and setWeather from LocationContext and WeatherContext
  const { userLocation } = useGeoLocation();
  const { setWeather } = useWeather();
  // Define OpenWeatherMap API key and base URL
  const OPEN_WEATHER_API_KEY = `80e3049067db3b72e7e3e9aa3c545a26`;
  const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;
  // Function to fetch weather data from OpenWeatherMap API
  const getData = async () => {
    try {
      // Make a GET request to the OpenWeatherMap API
      const { data } = await axios.get(API_BASE_URL);
      // Set the retrieved weather data to the context
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  // Fetch weather data when the userLocation changes
  useEffect(() => {
    getData();
  }, [userLocation]);
  // This component doesn't render anything directly; it's focused on fetching data
  return null;
};

export default GetCurrentWeather;
