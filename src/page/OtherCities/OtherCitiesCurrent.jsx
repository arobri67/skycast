import { useGeoLocation } from "../../context/LocationContext";
import GetCurrentWeather from "../../components/GetCurrentWeather";
import CurrentWeatherViewer from "../../components/CurrentWeatherViewer";

const OtherCitiesCurrent = () => {
  const { citySelected } = useGeoLocation();
  return (
    <>
      {citySelected !== null ? (
        <>
          <GetCurrentWeather />
          <CurrentWeatherViewer />
        </>
      ) : (
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
