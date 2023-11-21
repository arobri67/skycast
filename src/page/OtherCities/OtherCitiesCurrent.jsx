import { useGeoLocation } from "../../context/LocationContext";
import GetCurrentWeather from "../../components/GetCurrentWeather";
import CurrentWeatherViewer from "../../components/CurrentWeatherViewer";

const OtherCitiesCurrent = () => {
  // Access citySelected from LocationContext
  const { citySelected } = useGeoLocation();
  return (
    <>
      {/* Display current weather components if a city is selected */}
      {citySelected !== null ? (
        <>
          {/* Component to get current weather data for other cities */}
          <GetCurrentWeather />
          {/* Component to display the current weather for other cities */}
          <CurrentWeatherViewer />
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

export default OtherCitiesCurrent;
