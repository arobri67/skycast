import { useGeoLocation } from "../../context/LocationContext";
import GetCurrentWeather from "../../components/GetCurrentWeather";
import CurrentWeatherViewer from "../../components/CurrentWeatherViewer";
import "./Current.css";

const Current = () => {
  const { userLocation, errorMsg } = useGeoLocation();
  return (
    <>
      {errorMsg.code === 1 ? (
        <div className="error">
          <h2>Oops! Something went wrong while fetching your location.</h2>
          <p>
            We need your permission to access your location. Please grant
            permission in your browser settings.
          </p>
        </div>
      ) : userLocation.latitude !== null && userLocation.longitude !== null ? (
        <>
          <GetCurrentWeather />
          <CurrentWeatherViewer />
        </>
      ) : (
        <div className="loading">
          <h2>Loading weather data. Please wait...</h2>
        </div>
      )}
    </>
  );
};

export default Current;
