import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [userWeather, setUserWeather] = useState(null);

  const setWeather = (data) => {
    setUserWeather(data);
  };
  const [userForecast, setUserForecast] = useState(null);
  const setForecast = (data) => {
    setUserForecast(data);
  };

  return (
    <WeatherContext.Provider
      value={{ userWeather, setWeather, userForecast, setForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

//custom hook for weather data
export const useWeather = () => {
  const context = useContext(WeatherContext);
  return context;
};
