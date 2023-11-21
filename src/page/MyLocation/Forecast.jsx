import { useGeoLocation } from "../../context/LocationContext";
import GetForecast from "../../components/GetForecast";
import ForecastViewer from "../../components/ForecastViewer";

const Forecast = () => {
  // Access userLocation and errorMsg from LocationContext
  const { userLocation, errorMsg } = useGeoLocation();
  return (
    <>
      {/* Display error message if geolocation permission is denied */}
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
          {/* Component to get forecast data */}
          <GetForecast />
          {/* Component to display the forecast */}
          <ForecastViewer />
        </>
      ) : (
        // Display loading message if userLocation is not available yet
        <div className="loading">
          <h2>Loading weather data. Please wait...</h2>
        </div>
      )}
    </>
  );
};

export default Forecast;
