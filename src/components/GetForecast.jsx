import axios from "axios";
import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { useGeoLocation } from "../context/LocationContext";

const GetForecast = () => {
  // Access userLocation and setForecast from LocationContext and WeatherContext
  const { userLocation } = useGeoLocation();
  const { setForecast } = useWeather();

  // Define OpenWeatherMap API key and base URL
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const API_BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

  // Function to fetch forecast data from OpenWeatherMap API
  const getData = async () => {
    try {
      // Make a GET request to the OpenWeatherMap API
      const { data } = await axios.get(API_BASE_URL);
      // Set the retrieved forecast data to the context
      setForecast(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  // Fetch forecast data when the userLocation changes
  useEffect(() => {
    getData();
  }, [userLocation]);
  // This component doesn't render anything directly; it's focused on fetching data
  return null;
};

export default GetForecast;
