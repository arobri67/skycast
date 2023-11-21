import { createContext, useState, useContext } from "react";

// Create a context for managing weather-related state
const WeatherContext = createContext();

// WeatherProvider component to manage and provide weather-related state to its children
export const WeatherProvider = ({ children }) => {
  // State to track user's current weather
  const [userWeather, setUserWeather] = useState(null);
  // Function to update user's current weather
  const setWeather = (data) => {
    setUserWeather(data);
  };
  // State to track user's forecast
  const [userForecast, setUserForecast] = useState(null);
  // Function to update user's forecast
  const setForecast = (data) => {
    setUserForecast(data);
  };
  // Provide the context values to its children components
  return (
    <WeatherContext.Provider
      value={{ userWeather, setWeather, userForecast, setForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to conveniently access the weather context
export const useWeather = () => {
  const context = useContext(WeatherContext);
  return context;
};
