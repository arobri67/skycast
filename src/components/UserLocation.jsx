import { useEffect } from "react";
import { useGeoLocation } from "../context/LocationContext";

const UserLocation = () => {
  // Access setLocation and setErrorfrom LocationContext
  const { setLocation, setError } = useGeoLocation();
  useEffect(() => {
    // Retrieve the user's geolocation using the browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      // Success callback: Update the location with latitude and longitude
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      // Error callback: Handle geolocation error by setting an error
      (error) => {
        setError(error);
      }
    );
  }, []); // The empty dependency array ensures that this effect runs once on component mount
  // The component doesn't render anything visible
  return null;
};

export default UserLocation;
