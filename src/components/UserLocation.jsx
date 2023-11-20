import { useEffect } from "react";
import { useGeoLocation } from "../context/LocationContext";

const UserLocation = () => {
  const { setLocation, setError, userLocation } = useGeoLocation();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(error);
      }
    );
  }, []);
  return null;
};

export default UserLocation;
