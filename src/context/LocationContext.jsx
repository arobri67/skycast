import { createContext, useState, useContext } from "react";

// Create a context for managing location-related state
const LocationContext = createContext();

// LocationProvider component to manage and provide location-related state to its children
export const LocationProvider = ({ children }) => {
  // State to track user's location
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });
  // Function to update user's location
  const setLocation = (location) => {
    setUserLocation(location);
  };
  // State and function to handle error messages
  let [errorMsg, setErrorMsg] = useState("");
  const setError = (error) => {
    setErrorMsg(error);
  };
  // State and function to track the selected city
  let [citySelected, setSelectedCity] = useState(null);
  const setCity = (city) => {
    setSelectedCity(city);
  };
  // Provide the context values to its children components
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

// Custom hook to conveniently access the location context
export const useGeoLocation = () => {
  const context = useContext(LocationContext);
  return context;
};
