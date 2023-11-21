import { useGeoLocation } from "../../context/LocationContext";
import GetForecast from "../../components/GetForecast";
import ForecastViewer from "../../components/ForecastViewer";
import GetCurrentWeather from "../../components/GetCurrentWeather";
import "./OtherForcast.css";

const OtherCitiesForecast = () => {
  const { citySelected } = useGeoLocation();
  return (
    <>
      {/* Display current weather, forecast data, and forecast viewer components if a city is selected */}
      {citySelected !== null ? (
        <>
          {/* Component to get current weather data for other cities */}
          <GetCurrentWeather />
          {/* Component to get forecast data for other cities */}
          <GetForecast />

          {/* Component to display the forecast for other cities */}
          <ForecastViewer />
        </>
      ) : (
        // Display loading message if no city is selected
        <div className="loading">
          <h2>
            Please select a city in the menu above to see the weather forecast.
          </h2>
        </div>
      )}
    </>
  );
};

export default OtherCitiesForecast;
