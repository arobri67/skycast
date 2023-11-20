import { createContext, useState, useContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const setLocation = (location) => {
    setUserLocation(location);
  };

  let [errorMsg, setErrorMsg] = useState("");
  const setError = (error) => {
    setErrorMsg(error);
  };

  let [citySelected, setSelectedCity] = useState(null);
  const setCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        setLocation,
        errorMsg,
        setError,
        citySelected,
        setCity,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

//custom Hook to use LocationContext
export const useGeoLocation = () => {
  const context = useContext(LocationContext);
  return context;
};
